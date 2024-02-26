const patter2 = (num) => {
    let char = "";
    for (let i = 1; i <= num; i++) {
        for (let j = 1; j <= i; j++) {
            char = char + j + " ";
        }
        console.log(char);
        char = "";
    }


}
patter2(5);


/*
output
1
1 2 
1 2 3 
1 2 3 4 
1 2 3 4 5 
 */