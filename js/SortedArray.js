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

let number=[1,43,5,7];
/*     number.sort((a,b)=>(a-b)) //in inBuilt methode */
console.log(sort(number));