const fibonicNumber=(num)=>{
let num1=0;
let num2=1;
for(let i=0;i<=num;i++){
    console.log(num1);
    let answ=num1;
    num1=num1+num2;//0+1=1,1+1=2,2+2=4,4+4=8,
    num2=answ;//,


}
}
console.log(fibonicNumber(10));
