function solution(numbers, direction) {
    const answer =[]
    if(direction==="right"){
        numbers.forEach((v,i)=>{
            if(i===(numbers.length-1)){
                answer[0]=v
                return;
            }
            answer[i+1]=v
        })
    }else{
        numbers.forEach((v,i)=>{
            if(i===0){
                answer[numbers.length-1]=v
                return;
            }
            answer[i-1]=v
        })
    }
    return answer;
}