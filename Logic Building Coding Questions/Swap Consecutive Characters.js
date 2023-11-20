function swapConsecutiveCharacters(inputString) {
    // Convert the string to an array of characters for easy manipulation
    const charArray = inputString.split('');
  
    // Iterate through the characters, swapping consecutive pairs
    for (let i = 0; i < charArray.length - 1; i += 2) {
      const temp = charArray[i];
      charArray[i] = charArray[i + 1];
      charArray[i + 1] = temp;
    }
  
    // Join the characters back into a string
    const swappedString = charArray.join('');
  
    return swappedString;
  }
  
  // Example 1:
  const input1 = "abcdef";
  console.log(swapConsecutiveCharacters(input1)); // Output: "badcfe"
  
  // Example 2:
  const input2 = "AlmaBetter";
  console.log(swapConsecutiveCharacters(input2)); // Output: "lAameBttre"
  