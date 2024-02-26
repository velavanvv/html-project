//count consonat
const consonatCount = (str) => {
    let count = 0;

    let myMap = new Map();
    for (let i = 0; i < str.length; i++) {
        if((str.charAt(i)>='a'&&str.charAt(i)<='z') || (str.charAt(i)>='A' && str.charAt(i)<='Z')){
        if ((str.charAt(i) != 'a') && (str.charAt(i) != 'e') && (str.charAt(i) != 'i') && (str.charAt(i) != 'o') && (str.charAt(i) != 'u') &&
            (str.charAt(i) != 'A') && (str.charAt(i) != 'E') && (str.charAt(i) != 'I') && (str.charAt(i) != 'O') && (str.charAt(i) != 'U')) {
      count++;
}

}
           

        
    
    } /* myMap.forEach((value, key) => {
        console.log(`${key}=${value}`)
    }); */
    return count;
}


let string = "welcome to my javascript";

console.log(consonatCount(string));

/* 
output 

14
 */