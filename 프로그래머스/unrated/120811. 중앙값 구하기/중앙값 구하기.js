function solution(array) {
   const sortArray = array.sort((a,b)=> a-b)
    return sortArray[Math.floor(sortArray.length/2)];
}