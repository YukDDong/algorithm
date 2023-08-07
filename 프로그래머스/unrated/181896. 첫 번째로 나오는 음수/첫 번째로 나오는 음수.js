function solution(num_list) {
    var answer = 0;
    var indexList = [];
    num_list.map((x, index)=>{
        if(x<0) indexList.push(index);
    })
    if(indexList.length===0) answer=Number(-1)
    else answer=indexList[0];
    return answer;
}