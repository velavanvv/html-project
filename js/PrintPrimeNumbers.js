//print prime number
const checkPrime=(num)=>{
let isFlag=[];
    for(let i=0;i<=num;i++){
isFlag[i]=true;
}
for(let i=2;i<=num;i++){
    if(isFlag[i]==true){
        for(let j=i*i;j<=num;j=i+j){
            isFlag[j]=false;
        }
    }
}
for(let i=0;i<=num;i++){
    if(isFlag[i]==true){
        console.log(i);
    }
}
}
let num=24
checkPrime(num);