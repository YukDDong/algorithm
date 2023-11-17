function factorial(num){
    if (num < 0)
        return -1;
    else if (num == 0)
        return 1;
    else {
        return (num * factorial(num - 1));
  }
}

function solution(n) {
    let i=1;
    while(factorial(i)<n||factorial(i)===n){
          i++
          }
    return i-1;
}