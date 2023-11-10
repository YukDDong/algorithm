function solution(num_list) {
    let even = 0;
    let odd = 0;
    num_list.forEach((num)=>{
        if(num%2===0){
            even++
            return;
        }
        odd++
        return;
    })
    return [even, odd];
}