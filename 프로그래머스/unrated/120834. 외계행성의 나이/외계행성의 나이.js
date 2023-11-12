function solution(age) {
    const arr = ["a", "b","c","d","e","f","g","h","i","j"];
    const ageArr = String(age).split("")
    let result="";
    ageArr.forEach((v)=>{
        result=result+arr[v]
    })
    
    return result;
}