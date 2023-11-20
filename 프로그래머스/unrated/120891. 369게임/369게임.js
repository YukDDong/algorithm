function solution(order) {
    let answer = 0;
    const array = [...order.toString()]
    for(let i=0; i<array.length; i++){
        const number = array[i]
        if(number==="3"||number==="6"||number==="9"){
            answer++
        }
    }
    return answer;
}