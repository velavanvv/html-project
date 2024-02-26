//Remove duplicate in string


const remove = (str) => {
   let char=str.split("");
    let isFlag = [];
    for (let i = 0; i < char.length; i++) {
        isFlag[i] = true;
    }
    for (let i = 0; i < char.length; i++) {
        if (isFlag[i] == false || char[i]==" ") {
            continue;
        }
        else {
            for (let j = i + 1; j < char.length; j++) {
                if (char[i] == char[j]) { 
                    isFlag[j] = false; 
                }
            }
        }
    }
    let char1 = "";
    for (let i = 0; i < char.length; i++) {
        if (isFlag[i] == true) {
         char1 = char1+char[i];

        }
    }
    return char1;

}
let number = "veeeeel fds dsgfdgddd";
console.log(remove(number));


//output
//vel fds g
