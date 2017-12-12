let fetch = require('node-fetch');
let fs = require('fs');

let token = 'EAACEdEose0cBAFZAZCYf0SFhJpTDYbWcr4ZC7oz8dg13RFegXonrHuAgKlIoXkEtuvSyToZASMEhaxPxIJ95kAdvmtoBDEWhwAk10V7y591OzlIZA2AgHm7vqjl7wZAe28PEgZCownJzEpTYS4fl9Prvg7uLiBQ96ZCs4lPf26ZAmpxVN5ZAcGJAUBdAAmf0xgmrryJ1TaJ54I2AZDZD';
let limit = 150;

let args = '?access_token='+token+'&fields=id,message,comments{message}&format=json&method=get&pretty=0&suppress_http_code=1&limit=150';
let api_version = '2.11';
let baseUrl = 'https://graph.facebook.com';
let url = baseUrl+'/181665176189/feed'+args;

let result = [];

let currentPage = url;
async function crawl(){
    let next = true;
    let page = 1;
    while(next){
        await fetch(currentPage).then(res=>res.json()).then(json=>{
            //let msgs = json.data.map(o=>o.message);
            let msgs = json.data;
            result = result.concat(msgs);
            console.log("result sample",result[result.length-1]);
            next = (json.paging && json.paging.next) ? true : false;
            currentPage = (next) ? json.paging.next : url;
            page = (next) ? page+1 : page;
        })
        console.log("Still going at page: "+page);
    }
    console.log("Writing to file");
    //fs.writeFile('./output.json',result.join(' \n'),(err)=>{
    fs.writeFile('./output.json',JSON.stringify(result),(err)=>{
        if(err){
            console.log(err);
        }
        console.log("File saved!");
    })
}

crawl();
