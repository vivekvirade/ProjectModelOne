//Write a JavaScript function countOccurrences that takes a string and a character as input and returns the count of occurrences of that character in the sentence string.
// function countOccurrences(str, char) {
//     // Write your code here
//     let count = 0;
//     for (const c of str) {
//         if (c === char) {
//             count++;
//         }
//     }
//     return count;
// }

// // Do not modify the below lines
// module.exports = { countOccurrences };


//Rewrite the code without using only loop and try to implement inbuit string methods

function countCharacterOccurrences(inputString, character) {
    const regex = new RegExp(character, 'g');
    const matches = inputString.match(regex);
  
    return matches ? matches.length : 0;
  }
  
  // Example usages
  const count1 = countCharacterOccurrences("hello world", "o");
  console.log(count1); // Output: 3