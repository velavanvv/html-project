//count characters in given string
const characterCount=(str)=>{
let count=0;
    for(let i=0;i<str.length;i++){
        if((str.charAt(i)>='a'&&str.charAt(i)<='z') || (str.charAt(i)>='A' && str.charAt(i)<='Z')){
        count++;
    }
    }return count;
}


let string="gdfgf hgfh";

console.log(characterCount(string));