const gather = ["a" , "e" , "i" , "o" , "u"]

function solution(my_string) {
    let array = my_string.split("")
    gather.forEach((v)=>{
        array = array.filter((a)=>a!==v)
    })
    return array.join("");
}