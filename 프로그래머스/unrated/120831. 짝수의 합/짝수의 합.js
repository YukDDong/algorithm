function solution(n) {
    const num = Math.floor(n/2)
    let sum=0;
    for(let i = 1; i<=num; i++){
        sum=sum+i
    }
    return sum*2;
}