function solution(n, words) {
    let arr = [];
    let answer;
    for(let i=0; i<words.length; i++){
        const preStr = words[i-1]
        if(arr.includes(words[i])||(preStr&&preStr[preStr.length-1]!==words[i][0])){
            return [i%n+1, Math.floor(i/n)+1]
        }else{
            arr.push(words[i])
        }
    }
    

    return [0,0];
}