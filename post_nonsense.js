let fetch = require('node-fetch');
let fs = require('fs');
let sentenceGenerator = require("./generator.js");

let token = (""+fs.readFileSync('token')).replace(/\n/,"");
console.log(token);
let message = sentenceGenerator();
let args = '?access_token='+token+'&message='+encodeURIComponent(message);
let api_version = '2.11';
let baseUrl = 'https://graph.facebook.com';
let url = baseUrl+'/181665176189/feed'+args;
console.log(url);

fetch(url,{
    method: "POST"
}).then(res=>console.log("Success!",res)).catch(err=>console.log("Error!",err));
