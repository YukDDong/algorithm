function solution(k, tangerine) {
    let count = 0;
    let min = 0;
    const map = new Map();
    tangerine.forEach((v)=>{
        if(map.get(v)){
            map.set(v, map.get(v)+1)
        }else{
            map.set(v,1)
        }
    })
    const mapArr = [...map];
    mapArr.sort((a, b) => b[1] - a[1]);
    for(let i=0; i<mapArr.length; i++){
        let sum = count + mapArr[i][1];
        if(sum>=k) return min+1;
        count = sum;
        min+=1;
    }
}

// 제일 많은 갯수의 귤을 채택해서 넣고를 반복?

