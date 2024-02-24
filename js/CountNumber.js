const countNumber = (num) => {
    let count = 0;
    while (num > 0) {
        num = parseInt(num / 10);
        count++;
    } return count;
}
let number = 32434;
console.log(countNumber(number));