//convert first word as caps

const firstCaps=(str)=>{
   let word=str.split(" ");
   let str1="";
   for(let i=0;i<word.length;i++){
    word[i]=word[i].charAt(0).toUpperCase()+word[i].slice(1);
str1=str1+word[i]+" ";   
}
   
   return str1;
    }
    
    
    let string="welcome to my javascript";
    
    console.log(firstCaps(string));

    //output
    //Welcome To My Javascript 