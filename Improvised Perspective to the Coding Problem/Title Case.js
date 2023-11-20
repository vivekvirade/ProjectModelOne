//Write a JavaScript function called titleCase which accepts a sentence (string) as input and transforms it into title case.
//Title case means that the initial letter of each word is capitalized.

function titleCase(sentence) {
    // write your code here
const words = sentence.toLowerCase().split(' ');

for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substring(1);
}

return words.join(' ');
}

// Do not modify the below lines
module.exports = { titleCase };


//******************map Method */

function titleCase(sentence) {
    const words = sentence.toLowerCase().split(' ');

    const titleCasedWords = words.map(word => {
        return word[0].toUpperCase() + word.substring(1);
    });

    return titleCasedWords.join(' ');
}

// Do not modify the below lines
module.exports = { titleCase };
