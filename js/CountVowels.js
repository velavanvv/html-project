//number of Vowels count

const vowelCount=(str)=>{
    let count=0;
        for(let i=0;i<str.length;i++){
            if((str.charAt(i)=='a') ||(str.charAt(i)=='e') ||(str.charAt(i)=='i') ||(str.charAt(i)=='o') ||(str.charAt(i)=='u') ||
            (str.charAt(i)=='A') ||(str.charAt(i)=='E') ||(str.charAt(i)=='I') ||(str.charAt(i)=='O') ||(str.charAt(i)=='U') ){
            count++;
        }
        }return count;
    }
    
    
    let string="welcome to my javascript";
    
    console.log(vowelCount(string));


    /* 
    output
    
    7
    
    */