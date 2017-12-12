let fs = require('fs');
let path = require('path');
let Text = require('markov-chains-text').default;

const penhouse = ""+fs.readFileSync('./output');
//console.log(""+penhouse);

const fakePenthouse = new Text(penhouse);

const sentence = fakePenthouse.makeSentence();
 
console.log(sentence);
