const fs = require('fs');
const fetch = require("node-fetch");

const apiCall = 'https://en.wikipedia.org/w/api.php?action=parse&format=json&page=' + process.argv[2];

fetch(apiCall)
  .then(response => {
    response.json().then(json => {
      console.log(json.parse.text['*']);
    });
  })
  .catch(error => {
    console.log(error);
  });
    // fs.writeFile('out.html', dom.serialize());
