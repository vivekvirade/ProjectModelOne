function findMove(s) {
    const possibleMoves = [];
    for (let i = 0; i < s.length - 1; i++) {
      if (s[i] === '+' && s[i + 1] === '+') {
        const nextState = s.substring(0, i) + '--' + s.substring(i + 2);
        possibleMoves.push(nextState);
      }
    }
    return possibleMoves;
  }
  
  // Example 1:
  const input1 = "++++";
  console.log(findMove(input1)); // Output: ["--++", "+--+", "++--"]
  
  // Example 2:
  const input2 = "++-++";
  console.log(findMove(input2)); // Output: ["---++", "++---"]
  