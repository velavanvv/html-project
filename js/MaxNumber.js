const max=(num)=>{
    let max=0;
    for(let i=0;i<num.length;i++){
        if(num[i]>max){
            max=num[i];
        }
    }
return max;
}
let number=[1,2,,343,4,5,6];
console.log(max(number));
/* 
number.sort((a,b)=>(b-a));
console.log(number[0]);
*/