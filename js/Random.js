/* 

function randomNumber(){

var guessNumber=document.getElementById("checknumber");
var result=document.getElementById("result");
  var random=Math.floor(Math.random()*10000)+1;
 var enterednumber=guessNumber.value;
if(random==enterednumber){
  result.textContent="correct";
}
else{
  result.textContent="worng the correct number is "+random;
}
  
}
var numsd=[122,3,4,55,47];
var numssf=[2,5,76,87,8];

const addArray=(nums,numss)=>{
var gd=numss.sort((a,b)=>b-a);
var sli=nums.slice(0,3);
var fin=nums.join(numss);
var re=nums.reverse();
var po=nums.pop();
 
var pu=nums.push(243);
nums.unshift(23);
nums.shift();
console.log(re.toString());
console.log(nums.includes(4));
console.log(nums.splice(1));
console.log(nums.fill(446));
console.log(sli);
return gd;
}
console.log(addArray(numsd,numssf));
var string1="vela";
var string2=24;
const concat=(str1,str2)=>{
var str3=str1+str2;
return str3;
}
/*  
const num=[12,3,4,56,6,7];
const add=(nums)=>{
  var sum=0;
sum=sum+array9lo.forEach(element => {
  
});
}
 */
const ad=new Map();
ad.set(1,"vela");
console.log(ad.get(1));
let num1=2;
let num2=3;
if(num1==0||num2==0) return 0;
var max=num1>=num2?num1:num2;
while(true){
  if(max%num1==0 && max%num2==0){
    console.log(max);
    return;
  }
  ++max;
}
num1=num1+num2;
num2=num1-num2;
num1=num1-num2;
console.log(num1);
console.log(num2);
