//Write a JavaScript function called findLongestWord that takes a sentence (string) as input and determines the length of the longest word within the sentence.
function findLongestWord(sentence) {
    // Write your code here
const words = sentence.split(' ');
let maxLength = 0;

for (let i = 0; i < words.length; i++) {
    const length = words[i].length;
    if (length > maxLength) {
        maxLength = length;
    }
}

return maxLength;
}

// Do not modify the below lines
module.exports = { findLongestWord };


//********************************************* */
function longestWordLength(str) {
    const words = str.split(' ');
    let maxLength = 0;

    for (const word of words) {
        const cleanWord = word.replace(/[^a-zA-Z]/g, ''); // Remove non-alphabetic characters
        const wordLength = cleanWord.length;
        
        if (wordLength > maxLength) {
            maxLength = wordLength;
        }
    }

    return maxLength;
}
module.exports = { findLongestWord };


