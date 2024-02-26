//number of caps and small  digits letter

const capsSmallCount = (str) => {
    let sCount = 0;
    let cCount=0;
    let dCount=0;
    let count=0;
    let char=str.split("");
    for(let i=0;i<char.length;i++){
        if(char[i]>='a' && char[i]<='z'){
            sCount++;
        }
        else if( char[i]>='A' && char[i]<='Z'){
            cCount++;
        }
        else if( char[i]>='0' && char[i]<='9'){
            dCount++;
        }
        else{
            count++;
        }
    }
console.log("number of small letter: "+sCount);
console.log("number of Caps letter: "+cCount);
console.log("number of number : "+dCount); 

console.log("number of special : "+count); 

}
           
let strin = "welcome to 6 3my javascript";
capsSmallCount(strin);


/* 
output
number of small letter: 21
number of Caps letter: 0
number of number : 2
number of special : 4
*/