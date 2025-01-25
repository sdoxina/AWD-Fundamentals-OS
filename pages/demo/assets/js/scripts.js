// Input/Output and Conditionals
function recommendActivity() {
  const weather = document.getElementById('weather').value; // Get selected weather
  const activityOutput = document.getElementById('activity-output');
  activityOutput.innerHTML = ''; // Clear previous output

  const activity = document.createElement('p');

  // Conditional logic for recommendations
  if (weather == 'sunny') {
    activity.textContent = "It's a sunny day! Perfect for a walk in the park or a beach outing.";
    activity.style.color = 'orange';
  } else if (weather == 'rainy') {
    activity.textContent = "It's rainy! How about a cozy movie marathon at home with snacks?";
    activity.style.color = 'blue';
  } else if (weather == 'cold') {
    activity.textContent = "Brr, it's cold! Time for a hot chocolate and a good book by the fireplace.";
    activity.style.color = 'purple';
  } else {
    activity.textContent = "Please select a valid weather option to get an activity recommendation.";
    activity.style.color = 'red';
  }

  activityOutput.appendChild(activity);
}


// Number Guessing Game
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
