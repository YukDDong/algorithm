function solution(n) {
    //n을 7로 나누었을때 나머지가 0 이면 나눈 값
    //n을 7로 나누었을때 나머지가 0 이 아니면 나눈 값 +1
   
    return n%7===0 ? n/7 : Math.ceil(n/7);
}