/*function samsung(){
    console.log("velavan");
}
function Moto(){
    console.log("moto");
}
function google(){
    console.log("google");
}
function Apple(){
    console.log("apple");
}
function lenovo(){
    console.log("lenovo");
}
function oppo(){
    console.log("oppo");
}samsung();
Moto();
function add(a){
    if((a & 1 )==0){
        return true;
    }
    else {
    
        return false;
    }
    
}
//var a=add(12);
var b=true;
 var d=add(12)? "even":"odd";
console.log(d);
var facter="ashok";
var fplayer="dhoni"
var fmovie="dada";
function favourite(){
    console.log("favouite actor:" +facter)
    console.log("favouite player:" +fplayer)
    console.log("favouite Movie:" +fmovie)
}
favourite();
function area(l,b){
    return l*b;
}
var length=10;
var bredth=20;
var ba=area(length,bredth);
console.log(ba);
console.log(0 & true | false )*/
/*for( i=1000;i<=1010;i++){
//    if((i & 1)==0)
if( i%100 !=0 && i%4==0){
    console.log("leap year");
}
else if( i%400==0 ){
    console.log("leap year");
}
else{
    console.log("non leap year");
}
}
function change(num1,num2){
    var a=Number(document.getElementById(num1).value);
        var b=Number(document.getElementById(num2).value);
        var total=a+b;
     
        console.log(total);
if(a===b){
    console.log("true");
}
        var result=document.getElementById("result").textContent= "result -"+total;
        return result;
}
function default1(){
   result.textContent="result";
}
function alertNumber(num3){
    var h=Number(document.getElementById(num3).value);
if(h<0){
alert("your entered number less than 0 please eneter postive number")
}
}

function handleKeyPress(event) {
    // Check if the pressed key is Enter
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent the default behavior of the Enter key
      console.log("Enter key pressed. Custom action can be performed here.");

      // Add your custom action here, such as submitting a form or performing some other task
    }
  }*/
function upper(num7){
var j=(document.getElementById(num7));
j.value=j.value.toUpperCase();
}



function randomNumber(){
    var guessNumber=document.getElementById("checknumber");
var result=document.getElementById("result");
var random=Math.floor (Math.random()*10)+1;
var enterednumber=guessNumber.value;
if(random==enterednumber){
    result.textContent="correct";
}
else{
    result.textContent="worng";
}
}
const Marks=()=>{
const marks=[0,1,2,3,4,5,6,7,8,9,10,11,45,62,46,75,47,48,49,50];
var count=0;
var j=0;
marks.sort((a,b)=>a-b); 
marks.unshift(23);
console.log(marks.indexOf(2));
console.log(marks);

var max=0;

for (let i=0;i<marks.length;i++){
 

     for(j=marks[i],k=i;j<=marks[marks.length-1];j++,k++){
        if(j==marks[k]){
           count++;
        }
        else{
           
            if(count>max){
                max=count;
            }
         
            break;
        }
     }count=0;


}
console.log(max);
}
Marks();

console.log(Marks());