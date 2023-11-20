function signOfProduct(nums) {
    // Initialize counters for negative and zero numbers
    let negativeCount = 0;
    let zeroCount = 0;
  
    // Iterate through the array
    for (let num of nums) {
      if (num < 0) {
        negativeCount++;
      } else if (num === 0) {
        zeroCount++;
      }
    }
  
    // Determine the sign based on the counts
    if (zeroCount > 0 || negativeCount % 2 === 0) {
      return 0; // Product is zero or positive
    } else {
      return -1; // Product is negative
    }
  }
  
  // Example 1:
  const input1 = [2, -3, 5, 4];
  console.log(signOfProduct(input1)); // Output: -1
  
  // Example 2:
  const input2 = [1, 2, 0];
  console.log(signOfProduct(input2)); // Output: 0
  