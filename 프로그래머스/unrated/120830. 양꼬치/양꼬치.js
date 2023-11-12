function solution(n, k) {
    const serviceDrink = Math.floor(n/10)
    
    return (12000*n)+(2000*(k-serviceDrink));
}