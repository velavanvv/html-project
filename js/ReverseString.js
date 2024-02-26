//Reverse String
const reverseString=(str)=>{var str2="";
for(let i=str.length-1;i>=0;i--){
     str2=str2+str.charAt(i);
}
return str2;
}
let string="velavan"
console.log(reverseString(string));