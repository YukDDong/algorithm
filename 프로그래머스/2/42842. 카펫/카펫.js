function solution(brown, yellow) {
    if(yellow===1){
        return [3,3]
    }
    for(let i = 1; i<=yellow; i++){
        if(i<yellow/i) continue;
        if(yellow%i===0){
            const arr= [i+2, yellow/i+2]
            console.log(arr)
            if(arr[0]*arr[1]===(brown+yellow)){
                return arr
            }
        }
    }
}