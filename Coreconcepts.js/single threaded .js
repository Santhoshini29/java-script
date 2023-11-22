function synchronousFunction() {
    console.log("Start");
  
    // Simulate a time-consuming task
    for (let i = 0; i < 3e9; i++) {
      // This loop will take some time to complete
    }
  
    console.log("End");
  }
  
  // Calling the synchronous function
  synchronousFunction();
  