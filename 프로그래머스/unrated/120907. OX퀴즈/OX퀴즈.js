function calStr(str){
    const [num1, cal, num2, _, answer] = str.split(" ")
    let calculatedNum;
    if(cal==="+"){
        calculatedNum = Number(num1)+Number(num2)
    }else{
        calculatedNum = Number(num1)-Number(num2)
    }
    
    return calculatedNum === Number(answer) ? "O" : "X";
}


function solution(quiz) {
    
    return quiz.map((v)=> (calStr(v)));
}