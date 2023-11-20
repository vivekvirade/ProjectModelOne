function insert7(inputString) {
    // Initialize an empty result string
    let result = '';
  
    // Initialize a counter to keep track of characters (excluding spaces)
    let charCount = 0;
  
    // Iterate through the input string
    for (let i = 0; i < inputString.length; i++) {
      const char = inputString[i];
  
      // Check if the character is not a space
      if (char !== ' ') {
        // Increment the character count
        charCount++;
  
        // Add the character to the result
        result += char;
  
        // If 6 characters have been encountered, insert "7"
        if (charCount % 6 === 0) {
          result += '7';
        }
      } else {
        // If it's a space, add it to the result
        result += char;
      }
    }
  
    return result;
  }
  
  // Example 1:
  const input1 = "Hello World and Universe!";
  console.log(insert7(input1)); // Output: "Hello W7orld an7d Unive7rse!"
  
  // Example 2:
  const input2 = "Full Stack Web Development";
  console.log(insert7(input2)); // Output: "Full St7ack Web7 Develo7pment"
  