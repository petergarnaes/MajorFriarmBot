let fetch = require('node-fetch');
let fs = require('fs');

let token = 'EAACEdEose0cBAGZBQynFGIDfmN3m9XXHm5vxECndEwhZAZAcxrIaLx0DPrLp4Rm5xDEZARSwiub2YWUr9qaJJnapYRWVENwpJqyScuTvv9DKggrgkB4K3ZAQTPF6ECmvZAgMQOJ2ZCv6amK7cQmyNJ4QEUtcUPiWZBwnqT6hQiQnIntW8nGaoFGmb4HUF0uUOFnvknyEdseZBEwZDZD';
let limit = 150;

let args = '?access_token='+token+'&fields=message&format=json&method=get&pretty=0&suppress_http_code=1';
let api_version = '2.11';
let baseUrl = 'https://graph.facebook.com';
let url = baseUrl+'/181665176189/feed'+args;

let result = ['Hey'];

let currentPage = url;
async function crawl(){
    let next = true;
    let page = 1;
    while(next){
        await fetch(currentPage).then(res=>res.json()).then(json=>{
            let msgs = json.data.map(o=>o.message);
            result = result.concat(msgs);
            console.log("res: "+result[result.length-1]);
            next = (json.paging && json.paging.next) ? true : false;
            currentPage = (next) ? json.paging.next : url;
            page = (next) ? page+1 : page;
        })
        console.log("Still going at page: "+page);
    }
    console.log("Writing to file");
    fs.writeFile('./output',result.join(' \n'),(err)=>{
        if(err){
            console.log(err);
        }
        console.log("File saved!");
    })
}

crawl();
