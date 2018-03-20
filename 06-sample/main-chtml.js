const fs = require('fs');
const mjnode = require('mathjax-node-sre');
mjnode.config({
    MathJax:{
        displayAlign: "left",
        displayIndent: "0em"
    }
})
mjnode.start()
const mj = mjnode.typeset;
const jsdom = require("jsdom");
const { JSDOM } = jsdom;


const input = fs.readFileSync(process.argv[2]).toString();

const dom = new JSDOM(input);
const document = dom.window.document;
for (let math of document.querySelectorAll("math")){
    mj({
        math: math.outerHTML,
        format: 'MathML',
        html: true
    }, function(result){
        math.outerHTML = result.html;
    });
}

mj({
    css: true
}, function(result){
    const styles = document.createElement('style');
    styles.textContent = result.css;
    document.head.appendChild(styles);

    fs.writeFile('chtml.html', dom.serialize());
})
