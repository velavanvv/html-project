const countOddAndEven = (num) => {
    let countOdd = 0;
    let countEven = 0;

    for (let i = 0; i <= num; i++) {
        if ((i & 1) == 1) {
            countOdd++;
        }
        else {
            countEven++;
        }
    }
    console.log("the coutn odd number" + countOdd);
    console.log("the coutn Even number" + countEven);
}
let number = 45;
countOddAndEven(number);