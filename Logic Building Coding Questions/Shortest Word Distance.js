function shortestDistance(wordsDict, word1, word2) {
    let index1 = -1; // Initialize index for word1
    let index2 = -1; // Initialize index for word2
    let minDistance = wordsDict.length; // Initialize the minimum distance
  
    for (let i = 0; i < wordsDict.length; i++) {
      if (wordsDict[i] === word1) {
        index1 = i;
      } else if (wordsDict[i] === word2) {
        index2 = i;
      }
  
      if (index1 !== -1 && index2 !== -1) {
        // Both words found, calculate the distance
        const distance = Math.abs(index1 - index2);
        minDistance = Math.min(minDistance, distance);
      }
    }
  
    return minDistance;
  }
  
  // Example 1:
  const wordsDict1 = ["practice", "makes", "perfect", "coding", "makes"];
  console.log(shortestDistance(wordsDict1, "coding", "makes")); // Output: 1
  
  // Example 2:
  const wordsDict2 = ["apple", "banana", "cherry", "apple", "date", "banana", "fig"];
  console.log(shortestDistance(wordsDict2, "apple", "fig")); // Output: 3
  