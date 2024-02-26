//reverse given digits
const reverse = (num) => {
    let rev = 0;
    let sum = 0;
    while (num > 0) {
        rev = num % 10;
        sum = sum * 10 + rev;
        num = parseInt(num / 10);

    } return sum;
}
let number = 2446546;
console.log("the Reverse of given number :" + reverse(number));