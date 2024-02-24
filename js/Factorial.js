const factorialNumber=(num)=>{
    let fact=1;
    for(let i=1;i<=num;i++){
fact=fact*i;
    }
    return fact;
}
let number=5;
console.log(factorialNumber(number));