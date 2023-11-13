function solution(emergency) {
    const initEmergency=[...emergency]
    const answerArr= []
    const sortArr = emergency.sort((a,b)=>b-a)
    sortArr.forEach((v,i)=>{
        const index = initEmergency.indexOf(v)
        answerArr[index]=i+1
    })
    return answerArr;
}