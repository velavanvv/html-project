//Even and odd sum values
const OESum = (num) => {
    let oddSum = 0;
    let evenSum = 0;

    for (let i = 0; i <= num; i++) {
        if ((i & 1) == 1) {
            oddSum = oddSum + i;
        }
        else {
            evenSum = evenSum + i;
        }
    }
    console.log("the sum of odd number :" + oddSum);
    console.log("the sum of Even number :" + evenSum);
}
let number = 3;
OESum(number);