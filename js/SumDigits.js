const sumDigits = (num) => {
    let rev = 0;
    let sum = 0;
    while (num > 0) {
        rev = num % 10;
        sum = sum + rev;
        num = parseInt(num / 10);

    } return sum;
}
let number = 12;
console.log("the sum of given number :" + sumDigits(number));