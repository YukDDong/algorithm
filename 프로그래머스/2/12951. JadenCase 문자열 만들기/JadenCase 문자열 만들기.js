const regex = /\d/g

function solution(s) {
    const stringArr = s.split(" ")
    
    return stringArr.map((v)=>{
        let newStr = v.toLowerCase()
        let newStrArr = [...newStr]
        if(newStrArr[0] && !newStrArr[0].match(regex)){
            newStrArr[0]=newStrArr[0].toUpperCase()
        } 
        return newStrArr.join("")
    }).join(" ");
}