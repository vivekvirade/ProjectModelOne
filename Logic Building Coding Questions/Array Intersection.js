function arrayIntersection(arr1, arr2) {
    // Create a Set to store unique elements from the first array
    const set1 = new Set(arr1);
  
    // Create a Set to store common elements from the second array
    const commonElements = new Set();
  
    // Iterate through the second array and check if the element is in set1
    for (const element of arr2) {
      if (set1.has(element)) {
        commonElements.add(element);
      }
    }
  
    // Convert the commonElements Set back to an array
    const result = [...commonElements];
  
    return result;
  }
  
  // Example 1:
  const input1 = [1, 2, 2, 3, 4, 5];
  const input2 = [2, 3, 3, 6];
  console.log(arrayIntersection(input1, input2)); // Output: [2, 3]
  
  // Example 2:
  const input3 = [70, 20, 30, 50];
  const input4 = [30, 40, 50, 60, 70];
  console.log(arrayIntersection(input3, input4)); // Output: [70, 30, 50]
  