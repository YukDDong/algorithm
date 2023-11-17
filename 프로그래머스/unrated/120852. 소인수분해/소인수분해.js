function solution(n) {
    const setAnswer = new Set()
    for(let i=2; i<=n; i++){
        while(n%i===0){
            setAnswer.add(i)
            n=n/i
        }
    }
    
    return [...setAnswer].sort((a,b)=>a-b);
}