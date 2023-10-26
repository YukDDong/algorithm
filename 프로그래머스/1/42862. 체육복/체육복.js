function solution(n, lost, reserve) {
    var answer = 0;
    var map = new Map();
    
    for(i=1; i<n+1; i++){
        map.set(i, 0)
    }
    
    for(let v of lost){
        map.set(v, map.get(v)-1)
    }
    
    for(let v of reserve){
        map.set(v, map.get(v)+1)
    }
    
    map.forEach((value, key)=>{
        if(value<1) return;
        
        if(map.get(key-1)==-1){
            map.set(key-1, 0)
        }else if(map.get(key+1)==-1){
            map.set(key+1, 0)
        }
        return
    })
    
    map.forEach((value)=>{
        if(value==-1) return;
        answer++
    })
    
    console.log(map)
    return answer;
}