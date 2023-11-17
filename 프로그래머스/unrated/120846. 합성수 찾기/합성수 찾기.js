function calNumber(num){
    for(let i=2; i<num; i++){
        if(num % i === 0 ) return true;
    }
}


function solution(n) {
    var answer = 0;
    for(let i=1; i<=n; i++){
        if(calNumber(i)){
            answer++
        }
    }
    return answer;
}