function solution(sides) {
    const [a, b, c]= sides.sort()
    return c<a+b ? 1 : 2;
}