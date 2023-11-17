function solution(my_string) {
    
    return [...my_string.replace(/\D/g,"")].map(v=>Number(v)).sort((a,b)=>a-b);
}