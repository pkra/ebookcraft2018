const fs = require('fs');
const mj = require('mathjax-node-sre').typeset;
const jsdom = require("jsdom");
const { JSDOM } = jsdom;


const input = fs.readFileSync(process.argv[2]).toString();

const dom = new JSDOM(input);
const document =     dom.window.document;
const state = {}
for (let math of document.querySelectorAll("math")){
    mj({
        math: math.outerHTML,
        format: 'MathML',
        svg: true,
        globalSVG: true,
        state: state
    }, function(result){
        math.outerHTML = result.svg;
    });
}

mj({}, function(){
    if (state.defs){
        const svg = document.createElement('svg');
        svg.setAttribute('style', 'display: none');
        svg.appendChild(state.defs);
        document.body.insertBefore(svg, document.body.firstChild);
    }
    fs.writeFile('out.html', dom.serialize());
})
