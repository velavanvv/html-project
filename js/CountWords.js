//number of words

const WordsCount=(str)=>{
    let str1=str.split(" ");
    let count=0;
        for(let i=0;i<str1.length;i++){
        count++;
        }return count;
    }
    
    
    let string="Welcome to my javascript";
    
    console.log(WordsCount(string));

    /* 
    output
    4
    */