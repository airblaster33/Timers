function countdown(number) {
    let timer = setInterval(function() {
      console.log(number);
      number--;
      if (number === 0) {
        clearInterval(timer);
        console.log("DONE!");
      }
    }, 1000);
  }
  
  // Example usage:
  countdown(5);
  
  function randomGame() {
    let counter = 0;
    let timer = setInterval(function() {
      const randomNumber = Math.random();
      counter++;
      console.log("Random number:", randomNumber);
      if (randomNumber > 0.75) {
        clearInterval(timer);
        console.log("Number of tries:", counter);
      }
    }, 1000);
  }
  
  // Example usage:
  randomGame();
  