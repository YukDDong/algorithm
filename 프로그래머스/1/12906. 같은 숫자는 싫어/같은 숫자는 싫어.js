function solution(arr) {
  var answer = [];
  arr.forEach((v) => {
    if (v === answer[answer.length - 1]) return;
    answer.push(v);
  });

  return answer;
}