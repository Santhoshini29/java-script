function generateFibonacci(n) {
    let fibonacciSeries = [0, 1];
  
    for (let i = 2; i < n; i++) {
      let nextNumber = fibonacciSeries[i - 1] + fibonacciSeries[i - 2];
      fibonacciSeries.push(nextNumber);
    }
  
    return fibonacciSeries;
  }
  
  // Example: Generate the first 10 Fibonacci numbers
  let result = generateFibonacci(10);
  console.log(result);
  