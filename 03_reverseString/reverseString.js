const reverseString = function(word) {
    let length = word.length;
    let reversedString='';
    let i = 0;
    while(i<length){
        reversedString+=word.charAt(length-i-1);
        i++;
    }
    return reversedString;
    // return word.split("").reverse().join("");
};
reverseString("hello");
// Do not edit below this line
module.exports = reverseString;
