function solution(array) {
    let arr = []
    let max = 0;
    const map = new Map();
    
    for(let i=0; i<array.length; i++){
        map.has(array[i]) ? map.set(array[i], map.get(array[i])+1) : map.set(array[i],1)
        if(map.get(array[i])>max) max=map.get(array[i])
    }
    
    for(let [key, value] of map){
        if(value===max) arr.push(key)
    }
    return arr.length===1 ? arr[0] : -1;
}