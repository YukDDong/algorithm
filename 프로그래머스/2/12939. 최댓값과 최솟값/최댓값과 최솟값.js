function solution(s) {
    var answer = s.split(" ").map(Number);
    const min = Math.min(...answer);
    const max = Math.max(...answer);
    return `${min} ${max}`;
}