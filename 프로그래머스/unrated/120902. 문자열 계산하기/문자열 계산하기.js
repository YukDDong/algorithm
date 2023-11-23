function calculation(num1, cal, num2){
    if(cal === "+"){
        return num1+num2
    }else{
        return num1-num2
    }
}


function solution(my_string) {
    let num;
    let cal;
    my_string.split(" ").forEach(v=>{
        if(!num){
            num=Number(v);
            return;
        }
        
        if(v==="+"||v==="-"){
           cal=v
            return;
        }
        
        num = calculation(num, cal, Number(v))
    })
    return num;
}