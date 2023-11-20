 //Write a JavaScript function fizzBuzz that takes a positive integer n as input and returns an array of strings.
 //Replace numbers divisible by 3 with "Fizz", numbers divisible by 4 with "Buzz", and numbers divisible by both 3 and 4 with "FizzBuzz".
// function fizzBuzz(n) {
//     const result = [];

//     for (let i = 1; i <= n; i++) {
//         if (i % 3 === 0 && i % 4 === 0) {
//             result.push("FizzBuzz");
//         } else if (i % 3 === 0) {
//             result.push("Fizz");
//         } else if (i % 4 === 0) {
//             result.push("Buzz");
//         } else {
//             result.push(i.toString());
//         }
//     }

//     return result;
// }

// // Do not modify the below lines
// module.exports = { fizzBuzz };

//****************************************** */
// Approach 2: Rewrite the code using switch statement.
function fizzBuzz(n) {
    const result = [];

    for (let i = 1; i <= n; i++) {
        let output = "";

        switch (true) {
            case i % 3 === 0 && i % 4 === 0:
                output = "FizzBuzz";
                break;
            case i % 3 === 0:
                output = "Fizz";
                break;
            case i % 4 === 0:
                output = "Buzz";
                break;
            default:
                output = i.toString();
        }

        result.push(output);
    }

    return result;
}

// Do not modify the below lines
module.exports = { fizzBuzz };
