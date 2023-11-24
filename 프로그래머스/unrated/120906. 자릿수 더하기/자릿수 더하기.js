function solution(n) {
    let sum = 0;
    n.toString().split("").forEach(v=>{
        sum = sum + Number(v)
    })
    return sum;
}