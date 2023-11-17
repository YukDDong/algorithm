function solution(my_string) {
    let sum = 0;
[...my_string.replace(/\D/g,"")].forEach(v=>sum=sum+Number(v))
    return sum;
}