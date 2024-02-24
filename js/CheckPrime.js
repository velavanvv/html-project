const checkPrime=(num)=>{
for(let i=2;i<num/2;i++){
    if(num%i==0)return true;
}
return false;
}

let number=11;
if(checkPrime(number)){
    console.log("its not prime number");
}
else{
    console.log("its  prime number");
}