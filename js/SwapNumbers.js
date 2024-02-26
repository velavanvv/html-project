//swap numbers 
const swapNumber = (num1, num2) => {
    console.log("Before swap")
    console.log(num1);
    console.log(num2);
    let temp = num1;
    num1 = num2;
    num2 = temp;
    console.log("After swap")
    console.log(num1);
    console.log(num2);
}
let num1 = 23;
let num2 = 45;
swapNumber(num1, num2);
