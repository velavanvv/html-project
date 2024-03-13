let arr=["vela","asd","hygh"];
arr.forEach(val=>{

    console.log(val);
})

function print(call,value){
value=value+"van";
    call(value);
}
print(val=>{
    console.log(val)
},"vela");


arr=[-1,2,-3,4,-5];
/* arr.filter(multipe);
function multipe(val,index,arr){
 if(  (arr[index] & 1) ==0) arr.push(val);
}
console.log(arr); */
let sum=0;

arr.forEach((val,index,arr)=>{
    if(val>0) (sum=sum+val);
if(index==arr.length-1)console.log(sum);
})

