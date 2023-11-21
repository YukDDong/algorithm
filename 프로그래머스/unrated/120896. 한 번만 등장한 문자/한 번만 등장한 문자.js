function solution(s) {
    let answerArr = [];
    const sArr = s.split("")
    sArr.forEach((v)=>{
        if(sArr.filter(h=>h===v).length===1){
            answerArr.push(v);
        }
    })
    return answerArr.sort().join("");
}