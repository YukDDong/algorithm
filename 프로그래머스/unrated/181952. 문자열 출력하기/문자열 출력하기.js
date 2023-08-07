const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    if(line.length<1 || line.length>1000000) return;
    input = [line];
    rl.close();
}).on('close',function(){
    str = input[0];
    console.log(str)
    process.exit()
});