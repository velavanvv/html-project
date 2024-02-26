//min number
const minimum=(num)=>{
    let min=num[0];
    for(let i=0;i<num.length;i++){
        if(num[i]<min){
            min=num[i];
        }
    }
return min;
}
let number=[1,2,,343,4,5,6];
console.log(minimum(number));
/* 
number.sort((a,b)=>(a-b));
console.log(number[0]);
*/