const patter4 = (num) => {
    let char = "";
    for (let i = num; i >0; i--) {
        for (let j = i; j>0; j--) {
            char = char + "*" + " ";
        }
        console.log(char);
        char = "";
    }


}
patter4(5);


/*
output
* * * * * 
* * * * 
* * * 
* * 
* 
 */