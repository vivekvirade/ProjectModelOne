function findPrimes(n) {
    // Create an array of boolean values to represent prime and non-prime numbers.
    const isPrime = new Array(n + 1).fill(true);
  
    // 0 and 1 are not prime numbers, so mark them as non-prime.

    isPrime[0] = isPrime[1] = false;
  
    // Start with the first prime number, 2.
    let p = 2;
  
    // Iterate through numbers up to the square root of n to find prime numbers.
    while (p * p <= n) {
      if (isPrime[p]) {
        // Mark all multiples of the current prime number as non-prime.
        for (let i = p * p; i <= n; i += p) {
          isPrime[i] = false;
        }
      }
      p++;
    }
  
    // Create an array to store the prime numbers found.
    const primes = [];
  
    // Populate the 'primes' array with the prime numbers.
    for (let i = 2; i <= n; i++) {
      if (isPrime[i]) {
        primes.push(i);
      }
    }
  
    return primes;
  }
  
  // Example 1:
  const input1 = 20;
  console.log(findPrimes(input1)); // Output: [2, 3, 5, 7, 11, 13, 17, 19]
  
  // Example 2:
  const input2 = 9;
  console.log(findPrimes(input2)); // Output: [2, 3, 5, 7]
  