const major=(num)=>{
let count=0;
let max=num[0];
for(let i=0;i<num.length;i++){
    if(max==num[i+1]){

count++;
    }
    else if(max!=num[i] && count==0){
max=num[i];
count++;
    }
    else{
        count--;
    }
}return max;
}
let num=[1,1,1,2,2,2,2,3,3,1,1,1,1];
console.log(major(num));