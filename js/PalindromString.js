//check given string is palindrom or not

const isPalindrom=(str)=>{
let char=str.split("");

for(let i=0,j=char.length-1;i<=j;i++,j--){
if(char[i]==char[j]){
continue;
}
else{
console.log("its not palindrom");
return false;
}
}
console.log("its  palindrom");
return true;

}
let string="mom";
isPalindrom(string);
