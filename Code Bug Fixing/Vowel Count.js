// Code with error
// function countVowels(str) {
//     // Write your code here
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     const lowerStr = str.toLowerCase();
//     let count = 0;

//     for (let i = 0; i <= lowerStr.length; i++) {
//         if (vowels.includes(lowerStr[i])) {
//             count++;
//         }
//     }
//     return count;
// }

function countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const lowerStr = str.toLowerCase();
    let count = 0;

    for (let i = 0; i < lowerStr.length; i++) { // update <= to < 
        if (vowels.includes(lowerStr[i])) {
            count++;
        }
    }
    return count;
}
