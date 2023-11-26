function solution(n) {
    var answer = 0;
    let i = n+1;
    let binaryNLength = n.toString(2).replace(/0/g, "").length
    while(true){
        let binaryILength = i.toString(2).replace(/0/g, "").length
        if(binaryNLength===binaryILength){
            answer = i;
            break;
        }
        i++
    }
    return answer;
}