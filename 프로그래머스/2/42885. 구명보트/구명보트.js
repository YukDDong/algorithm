function solution(people, limit) {
    let boat = 0;
    people.sort((a,b)=>b-a)
    people.forEach(v=>{
        if(v+people.at(-1)>limit){
            boat++
        }else{
            people.pop();
            boat++
        }
    })
//     정확성 테스트는 통과했지만 효율성 테스트에서 실패한 케이스
//     while(people.length>0){
//         let human = people.pop();
//         for(let i=0; i<people.length; i++){
//             if(human+people[i]>limit) continue;
            
//             people.splice(i,1)
//             break;
//         }
//         boat++
//     }

    return boat;
}