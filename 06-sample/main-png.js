const fs = require('fs');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const puppeteer = require('puppeteer');
process.on('unhandledRejection', r => console.log(r));

// main helper
const svg2png = async function(svgstring, filename, page) {
  await page.goto('data:text/html,%3Cbody%3E%3C%2Fbody%3E');
  await page.evaluate(`var svgtext = \`${svgstring}\``);
  await page.evaluate(function() {
    document.body.innerHTML = svgtext;
  });
  const svg = await page.$('svg');
  await svg.screenshot({ path: filename });
};

// main
const main = async function(inputstring) {
  // set up puppeteer
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  page.setViewport({ width: 4000, height: 4000, deviceScaleFactor: 1 });
  // close on crash
  process.on('SIGINT', async () => {
    await browser.close();
    process.exit(1);
  });

  // set up DOM
  const dom = new JSDOM(inputstring);
  const document = dom.window.document;
  const svgs = document.querySelectorAll('svg');
  for (let i = 0; i < svgs.length; i++) {
    console.log('Equation ' + i);
    const svg = svgs[i];
    await svg2png(svg.outerHTML, './img/' + i + '.png', page);
    const img = document.createElement('img');
    img.setAttribute('src', i + '.png');
    img.setAttribute('width', svg.getAttribute('width'));
    img.setAttribute('height', svg.getAttribute('height'));
    img.setAttribute('style', svg.getAttribute('style'));
    svg.parentNode.replaceChild(img, svg);
  }
  await browser.close();
  fs.writeFileSync('png.html', dom.serialize());
};

// run
const input = fs.readFileSync(process.argv[2]).toString();
main(input);
