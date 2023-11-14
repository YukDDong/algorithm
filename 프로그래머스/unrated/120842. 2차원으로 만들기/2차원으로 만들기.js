function solution(num_list, n) {
   const answer = [];
  
  for (let i=0; i < num_list.length; i += n){
    const newArr = num_list.slice(i, i + n);
    answer.push(newArr);
  }
  
  return answer;
}