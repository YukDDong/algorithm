function solution(my_string, n) {
    let arr = [...my_string];
    
    
    return arr.map((v)=>v.repeat(n)).join("");
}