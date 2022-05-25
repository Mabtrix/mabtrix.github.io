let checkBtn = document.getElementById('check');
let output = document.getElementById('outputtext');
let guessSlot = document.getElementById('guesses');
let remaining = document.getElementById('remaining');
let restart = document.getElementById('restart');
let score = document.getElementById('score');
let img = document.getElementById('img');
let numGuessesLeft = 10
let highScore = 10
let hScore = 0
let randomNumber = parseInt((Math.random()*100)+1)

let usedValues = [];
checkBtn.addEventListener('click', function(){
let input = document.getElementById('userInput').value;



if (isNaN(input)){
    output.innerHTML = 'Please enter a valid number.'
} else if (input < 1) {
    output.innerHTML = 'Please enter a number greater than 1!'
} else if (input > 100){
    output.innerHTML = 'Please enter a number less than 100!'
} else if (usedValues.includes(input)){
    output.innerHTML = 'You already used this number!'
} else {
    usedValues.push(input);
    if (input == randomNumber){
      checkBtn.style.display = "none";
      img.src = "https://s3.envato.com/files/235925363/Access%20Granted%20590x332.jpg"
      output.innerHTML = `Congrats! you cracked the Code!, your number was ${randomNumber}.`
      guessSlot.innerHTML += `${input} `;
      restart.innerHTML = 'Play Again';
      hScore = 10-numGuessesLeft+1;
      if (hScore < highScore) {
        highScore = hScore
      };
      score.innerHTML = `${highScore} attempts used.`
    } else if (input < randomNumber){
      output.innerHTML = "You guessed too low!"
      guessSlot.innerHTML += `${input} `;
      numGuessesLeft--
      remaining.innerHTML = `${numGuessesLeft}`
    }; if (input > randomNumber){
      output.innerHTML = "You guessed too high!"
      guessSlot.innerHTML += `${input} `;
      numGuessesLeft--
      remaining.innerHTML = `${numGuessesLeft}`
    }; if (numGuessesLeft === 0) {
      img.src = "https://www.prophethacker.com/wp-content/uploads/2018/11/How-to-became-an-ethical-hacker.jpeg"
      output.innerHTML = `You failed to Crack the Code! The number was ${randomNumber}.`
      checkBtn.style.display = "none";
      restart.innerHTML = 'Try Again';
    }
  }
});


restart.addEventListener('click', function(){
  randomNumber = parseInt((Math.random()*100)+1)
  img.src = "https://www.pandasecurity.com/en/mediacenter/src/uploads/2019/07/pandasecurity-How-do-hackers-pick-their-targets.jpg"
  usedValues = [];
  remaining.innerHTML = `10`
  restart.innerHTML = 'Restart';
  checkBtn.style.display = "";
  guessSlot.innerHTML = '';
  output.innerHTML = 'Enter a number below';
  numGuessesLeft = 10
})
