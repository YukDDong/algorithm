function solution(s) {
    const arr = s.split(" ");
    const numberArr = [];
    let sumNumber=0;
    arr.forEach(v=>{
        if(v==="Z"){
            numberArr.pop();
            return;
        }
        numberArr.push(v)
    })
    numberArr.forEach(v=>{
        sumNumber=sumNumber+Number(v)
    })
    
    return sumNumber;
}