//Number each vowel
const vowelCount = (str) => {
    let count = 0;

    let myMap = new Map();
    for (let i = 0; i < str.length; i++) {
        if ((str.charAt(i) == 'a') || (str.charAt(i) == 'e') || (str.charAt(i) == 'i') || (str.charAt(i) == 'o') || (str.charAt(i) == 'u') ||
            (str.charAt(i) == 'A') || (str.charAt(i) == 'E') || (str.charAt(i) == 'I') || (str.charAt(i) == 'O') || (str.charAt(i) == 'U')) {
            if (myMap.has(str.charAt(i))) {
                let value = myMap.get(str.charAt(i));
                myMap.set(str.charAt(i), value + 1);
            }
            else {
                myMap.set(str.charAt(i), 1);
            }


        }
    } /* myMap.forEach((value, key) => {
        console.log(`${key}=${value}`)
    }); */
    return myMap;
}


let string = "welcome to my javascript";

console.log(vowelCount(string));


/* 
output:
Map { 'e' => 2, 'o' => 2, 'a' => 2, 'i' => 1 }
*/