//check given number is palindrom or not

const palindrom = (num) => {
    let rev = 0;
    let sum = 0;
    let check = num;
    while (num > 0) {
        rev = num % 10;
        sum = sum * 10 + rev;
        num = parseInt(num / 10);

    } if (check == sum) {
        console.log(check + " its palindrom Number");
        return true;
    }
    else {
        console.log(check + " its not palindrom Number");
        return false;
    }
}
let number = 121;
palindrom(number);
