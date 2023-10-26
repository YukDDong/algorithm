function solution(hp) {
    var calHp = hp;
    var ant = 0;
    const antPower = [5,3,1]
    antPower.forEach((v)=>{
        ant += Math.floor(calHp/v)
        calHp = calHp%v
    })
    return ant;
}