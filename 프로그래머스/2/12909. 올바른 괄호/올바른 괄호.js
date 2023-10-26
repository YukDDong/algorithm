function solution(s) {
  var answer = true;
  let count = 0;
  const arrS = [...s];
  arrS.forEach((v) => {
    if (count === 0 && v === ")") {
      answer = false;
      return;
    }
    v === "(" ? (count = count + 1) : (count = count - 1);
  });
  if (count !== 0) answer = false;

  return answer;
}