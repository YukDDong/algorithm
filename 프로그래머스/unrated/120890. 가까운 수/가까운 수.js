function solution(array, n) {
    let num = array[0];
    array.forEach((v)=>{
        const currentDifferent = Math.abs(n-num);
        const different = Math.abs(n-v);
        if(currentDifferent>different||(currentDifferent===different && v<n)){
            num = v
        }
    })
    
    return num;
}