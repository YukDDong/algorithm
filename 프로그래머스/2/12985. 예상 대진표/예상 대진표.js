function solution(n,a,b)
{
    let answer = 1;
    while(true){
        if(a%2===0 && a-1===b){
            return answer;
        }
        if(a%2===1 && a+1===b){
            return answer;
        }
        a=Math.round(a/2)
        b=Math.round(b/2)
        answer++
    }
}