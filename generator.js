let fs = require('fs');
let path = require('path');
let Text = require('markov-chains-text').default;

const penhouse = ""+fs.readFileSync('./output.json');
//console.log(""+penhouse);

let messages = JSON.parse(penhouse);

let document = messages.map((o)=>{
    let post = o.message;
    let comments = (o.comments && o.comments.data) ? o.comments.data : [];
    let commentMessages = comments.map(c=>c.message);
    let commentString = commentMessages.join('\n');
    return post+'\n'+commentString;
}).join('\n');

const fakePenthouse = new Text(penhouse);

module.exports = () => fakePenthouse.makeSentence();
