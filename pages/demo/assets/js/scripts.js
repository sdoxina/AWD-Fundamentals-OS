// Input/Output and Conditionals
function EligibilityToDrink() {
    const age = document.getElementById('age').value;
    const name = document.getElementById('name').value;
  
    // Clear previous output
    const output = document.getElementById('output');
    output.innerHTML = ''; 
  
    if (!name || !age) {
      const errorP = document.createElement('p');
      errorP.textContent = 'Please enter both name and age.';
      errorP.style.color = 'red'; // Optional styling for error message
      output.appendChild(errorP);
      return;
    }
  
    if (age >= 18) {
      const eligibleP = document.createElement('p');
      eligibleP.textContent = `You are eligible to drink, ${name}!`;
      eligibleP.style.color = 'green'; // Optional styling for success message
      output.appendChild(eligibleP);
    } else {
      const notEligibleP = document.createElement('p');
      notEligibleP.textContent = `You are not eligible to drink, ${name}.`;
      notEligibleP.style.color = 'red'; // Optional styling for failure message
      output.appendChild(notEligibleP);
    }
}

// Number Guessing Game with Input Field
const randomNumber = Math.floor(Math.random() * 10) + 1;
function checkGuess() {
    const guessedNumber = document.getElementById('guess').value;
    const guessOutput = document.getElementById('guess-output');
    
    guessOutput.innerHTML = ''; // Clear previous output
    const gameOutput = document.createElement('p');
    
    guessOutput.appendChild(gameOutput);

    // Check if guessed number matches the random number
    if (guessedNumber == randomNumber) {
        gameOutput.textContent = "Correct! You guessed the number.";
        gameOutput.style.color = 'green';
    } else {
        gameOutput.textContent = "Wrong guess, try again.";
        gameOutput.style.color = 'red';
    }
}
