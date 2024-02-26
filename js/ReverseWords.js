//Reverse words in given sentence


const reverseWords = (str) => {

    var str2 = "";
    var char = str.split(" ");
    for (let i = 0; i < char.length; i++) {
        for (let j = char[i].length - 1; j >= 0; j--) {
            str2 = str2 + char[i].charAt(j);
        } str2 = str2 + " ";
    }
    return str2;
}
let string = "welcome to my javascript"
console.log(reverseWords(string));

//output
//emoclew ot ym tpircsavaj 