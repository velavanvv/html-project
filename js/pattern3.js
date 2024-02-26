const patter3 = (num) => {
    let char = "";
    for (let i = 1,k=1; i <= num; i++) {
        for (let j = 1; j <= i; j++) {
            char = char + k++ + " ";
        }
        console.log(char);
        char = "";
    }


}
patter3(5);


/*
output
1 
2 3 
4 5 6 
7 8 9 10 
11 12 13 14 15 
 */