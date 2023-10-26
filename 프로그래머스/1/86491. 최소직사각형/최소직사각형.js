function solution(sizes) {
    var answer = 0;
    const largeArray = [];
    const smallArray = [];
    

    sizes.forEach((v)=>{
        if(v[0]>=v[1]){
            largeArray.push(v[0])
            smallArray.push(v[1])
        }else{
            largeArray.push(v[1])
            smallArray.push(v[0])
        }
    })
    
    return Math.max(...largeArray)*Math.max(...smallArray);
}