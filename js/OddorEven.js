
const oddOrEven = (num) => {
    if (num & 1 == 1) {
        console.log("the given number :" + num + "is odd");
    }
    else {
        console.log("the given number " + num + "is Even");
    }
}
oddOrEven(34);
/* const readline = require('readline');//javascript input by usere in terminal and in java{ we use scanner class for user input}
const r1=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
r1.question("pleas eneter number :",(number)=>{
    if(!isNaN(number)){
    oddOrEven(number); }
    else{
        console.log("worng input given by you")
    }
  
    r1.close();
}); */