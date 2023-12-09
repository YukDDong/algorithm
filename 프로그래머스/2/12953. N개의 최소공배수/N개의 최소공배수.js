function solution(arr) {
    let i =1;
    arr.sort((a,b)=>a-b);
    while(true){
        let num = arr[0]*i
        for(let j=0; j<arr.length; j++){
            if(num%arr[j]===0){
                if(j===arr.length-1){
                    return num;
                }
                continue;
            }else{
                break;
            }
        }
        i++
    }
}