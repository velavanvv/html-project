//remove duplicate in given array
const remove = (num) => {
    let isFlag = [];
    for (let i = 0; i < num.length; i++) {
        isFlag[i] = true;
    }
    for (let i = 0; i < num.length; i++) {
        if (isFlag[i] == false) {
            continue;
        }
        else {
            for (let j = i + 1; j < num.length; j++) {
                if (num[i] == num[j]) { 
                    isFlag[j] = false; 
                }
            }
        }
    }
    let num1 = [];
    for (let i = 0; i < num.length; i++) {
        if (isFlag[i] == true) {
            num1[i] = num[i];

        }
    }
    return num1;

}
let number = [1, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 6, 6];
console.log(remove(number));