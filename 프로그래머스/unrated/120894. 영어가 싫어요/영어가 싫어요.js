const englishNumber ={
    "zero": "0",
    "one": "1",
    "two": "2",
    "three": "3",
    "four": "4",
    "five": "5",
    "six": "6",
    "seven": "7",
    "eight": "8",
    "nine": "9"
}

function solution(numbers) {
    let number="";
    let english="";
    const numberKeys = Object.keys(englishNumber)
    const numbersArr = [...numbers]
    numbersArr.forEach(v=>{
        const engNum = english+v;
        console.log("engNum", engNum)
        if(numberKeys.includes(engNum)){
            number = number + englishNumber[engNum];
            english="";
            return;
        }
        english=engNum;
        console.log("english", english)
        console.log("number", number)
    })
    return Number(number);
}