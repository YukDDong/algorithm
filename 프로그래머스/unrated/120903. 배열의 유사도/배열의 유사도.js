function solution(s1, s2) {
    let answer = 0;
    if(s1.length<=s2.length){
        s1.forEach((v)=>{
            if(s2.includes(v)){
                answer++
            }
        })
    }else{
        s2.forEach(v=>{
            if(s1.includes(v)){
                answer++
            }
        })
    }
    return answer;
}