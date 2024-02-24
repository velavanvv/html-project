//Armstrong number means each number in given value to cube it and add the value is equal to given value
/* 
153 means
1*1*1+5*5*5+3*3*3=153
so add the cube value of each value is equal to gven value of 153;
*/
function arm() {

    let k = num;
    var sum = 0;
    while (num > 0) {
        let value = num % 10;

        sum = sum + (value * value * value);
        num = Math.floor(num / 10);

    }
    if (sum == k) {
        console.log(k + " is ArmStrong number");
    }
    else {
        console.log(k + " is not ArmStrong number");
    }

}
let num = 153;
arm(num);