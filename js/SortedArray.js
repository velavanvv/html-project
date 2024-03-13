//sorted array
const sort=(num)=>{
var isFlag=true;
for(let i=0;i<num.length;i++){
    isFlag=false;
    for(let j=1;j<num.length-i;j++){
    if(num[j-1]>num[j]){
let temp=num[j-1];
num[j-1]=num[j];
num[j]=temp;
isFlag=true;
    }
}
if(isFlag==false){break;}
}return num;
}

let number=[2,4,21,643,2];
console.log(number.slice(2,3));
/*          number.sort((a,b)=>(a-b)) //in inBuilt methode  */
console.log(sort(number));

let num=number.map(ele=>
    ele*2);

number.forEach(element => {
    
});


console.log((num));
let nu=[2,3,4,51,2,22,1,1,1,1];
let num1=Array.from(new Set(nu));
num1.sort((a,b)=>(a-b));
console.log(num1);