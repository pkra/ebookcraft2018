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
// Set to `false` for self-contained SVGs
const GLOBAL = true;
const state = {};
// work-around https://github.com/mathjax/MathJax-node/issues/398
mj({
    math: '<math><mtext/></math>',
    format: 'MathML',
    svg: true,
    useGlobalCache: GLOBAL,
    state: state
});

for (let math of document.querySelectorAll("math")){
    mj({
        math: math.outerHTML,
        format: 'MathML',
        svg: true,
        useGlobalCache: true,
        state: state
    }, function(result){
        math.outerHTML = result.svg.replace(/<svg/g,'<svg aria-label="' + result.speakText + '"');
        // math.setAttribute('aria-label', result.speakText);
        // work around epubcheck false positives
        // math.outerHTML = result.svg.replace(/role="img"/g, '').replace(/focusable="false"/g, '').replace(/aria-labelledby="MathJax-SVG-(.*?)-Title"/g, '');
    });
}

mj({}, function(){
    if (GLOBAL && state.defs){
        const svg = document.createElement('svg');
        svg.setAttribute('style', 'display: none');
        svg.appendChild(state.defs);
        // attach at end for convenience (though top is faster)
        document.body.appendChild(svg);
    };
    fs.writeFile('svg.html', dom.serialize());
})
