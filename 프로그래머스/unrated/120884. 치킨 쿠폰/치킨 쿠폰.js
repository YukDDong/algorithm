function solution(chicken) {
    var answer = 0;
//     치킨주문수 = 쿠폰수
//     쿠폰수 나누기 10 하면 서비스 치킨수+, 나머지는 쿠폰수로 대체
//     무한루프 하다가 쿠폰수가 10미만이면 break;
    let coupon=chicken;
    while(coupon>=10){
        answer+= Math.floor(coupon/10);
        coupon = Math.floor(coupon/10) + coupon%10
    }
    return answer;
}