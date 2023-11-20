function solution(cipher, code) {
    let answer = ""
    for(let i=1; i<=Math.floor(cipher.length/code); i++){
        answer = answer + cipher[i*code-1]
    }
    return answer;
}