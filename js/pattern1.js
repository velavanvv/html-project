const patter1 = (num) => {
    let char = "";
    for (let i = 1; i <= num; i++) {
        for (let j = 1; j <= i; j++) {
            char = char + "*" + " ";
        }
        console.log(char);
        char = "";
    }


}
patter1(5);


/*
output
* 
* * 
* * * 
* * * * 
* * * * *  
 */