function solution(box, n) {
    const [가로, 세로, 높이]  = box;
    return (Math.floor(가로/n)*Math.floor(세로/n)*Math.floor(높이/n));
}