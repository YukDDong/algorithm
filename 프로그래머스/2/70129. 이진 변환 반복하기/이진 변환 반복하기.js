function solution(s) {
    let str = s
    let zeroNum = 0;
    let count = 0;
    while(str!=="1"){
        let changeStr = str.replace(/0/g, "")
        zeroNum = zeroNum + (str.length - changeStr.length);
        count++
        str = changeStr.length.toString(2);
    }
    return [count, zeroNum];
}