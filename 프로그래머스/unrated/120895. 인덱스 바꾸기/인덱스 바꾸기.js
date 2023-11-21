function solution(my_string, num1, num2) {
    const one = my_string[num1];
    const two = my_string[num2];
    console.log(one, two)
    const string = [...my_string];
    string[num1]=two;
    string[num2]=one;
    return string.join("");
}