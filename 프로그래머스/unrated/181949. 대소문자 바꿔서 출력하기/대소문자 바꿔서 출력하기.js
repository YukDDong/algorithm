const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split("");
}).on('close',function(){
    let str = "";
    input.map((x)=>{
        if(x.toUpperCase()===x) str+=(x.toLowerCase());
        else str+=(x.toUpperCase());
    })
    console.log(str)
});