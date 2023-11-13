function factorial(num){
    if(num===0||num===1) return 1;
    return num * factorial(num - 1);
}

function solution(balls, share) {
    if(balls===share) return 1
    return Math.round(factorial(balls)/factorial(balls-share)/factorial(share));
    // return factorial(balls-share)
}