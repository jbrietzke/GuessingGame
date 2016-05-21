//* **** Global Variables **** */
// try to elminate these global variables in your project, these are here just to start.

/*var winningNumber = generateWinningNumber();
var previousGuesses = [];
var numberOfGuessesAllowed = 5;


/* **** Guessing Game Functions **** */

// Generate the Winning Number

function generateWinningNumber(){
	// add code here
	var min = 1;
	var max = 100;
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Fetch the Players Guess

function playersGuessSubmission(){
	// add code here
	playersGuess = +document.getElementById('userGuess').value;
	document.getElementById('userGuess').value = '';
}

// Determine if the next guess should be a lower or higher number

function lowerOrHigher(guessNumber, actualNumber){
	// add code here
	var difference = 0;
	if (guessNumber < actualNumber) {
		difference = guessNumber - actualNumber;
	}else if (guessNumber > actualNumber) {
		difference = guessNumber - actualNumber;
	}else{
	}
	return difference;
}

// Check if the Player's Guess is the winning number 

function checkGuess(previousGuesses){
	// add code here
	var response = "";
	if(previousGuesses !== []){
		for(var i=0; i < previousGuesses.length; i++){
			if (playersGuess === previousGuesses[i]) {
				response = $('<p id= "result" >That is a duplicate number! <\p>');
			}
		}
	}else{
		if (response === ""){
			previousGuesses.push(playersGuess);
			var remainingGuesses = 5 - previousGuesses.length;
			if (playersGuess === winningNumber) {
				$('body').css({"background-image": "url(Victory-Baby-Meme-04.jpg)"});
				$('.content, h1, p').hide();
				$('.navigation').prepend(response);
			}else{
				if (previousGuesses.length === numberOfGuessesAllowed) {
					$('body').css({"background-color": "black"});
					response = $('<p id="gameOver"> Game Over <\p>');
					$('.navigation').prepend(response);
				}else{
					var guessDifference = lowerOrHigher(playersGuess, winningNumber);
					var message = guessMessage(guessDifference);
					response = $('<p id="result"> Try Again! '+ message + ' You have '+ remainingGuesses +' guesses remaing. <\p>');
				}
			}
		}
	}
	$('#result').remove();
	$('.content').append(response);
}

function guessMessage(valueDifference){
	//console.log(valueDifference);
	var distanceResponse = " and you are more than "
	var highOrLowResponse;
	var adjustedResponse;
	if(valueDifference !== 0){
		if (valueDifference < 0) {
			highOrLowResponse = "You are guessing too low";
		}else{
			highOrLowResponse = "You are guessing too high";
		}
		valueDifference = (Math.abs(valueDifference));
		if(valueDifference > 20){
			adjustedResponse = "20 away.";
		}else if (valueDifference > 10){
			adjustedResponse = "10 away.";
		}else if (adjustedResponse > 5) {
			adjustedResponse = "5 away.";
		}else{
			adjustedResponse = "1 away.";
		}
		message = highOrLowResponse + distanceResponse + adjustedResponse;
	}else{
		message = "You got it exactly right!";
	}
	return message;
}
// Create a provide hint button that provides additional clues to the "Player"

function provideHint(){
	// add code here
	//console.log("hello");
	var hintArray = [];
	var randomNumberArray = [winningNumber];
	for(var i=0; i < 2; i++){
		randomNumberArray.push(generateWinningNumber());
	}
	for(var i = 0; i <= 2; i++){
		var randomNumber = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
		if (randomNumberArray[randomNumber] !== hintArray[0]  && randomNumberArray[randomNumber] !== hintArray[1]) {
			hintArray.push(randomNumberArray[randomNumber]);
		}else{
			i--;
		}
	}
	//console.log(hintArray);
	var hintMessage = $('<p id="hintMessage"> One of these values is the winning number, '+ hintArray +'  submit a guess! <\p>');
	$('#hintMessage').remove();
	$('.navigation').append(hintMessage);

}

// Allow the "Player" to Play Again

function playAgain(){
	// add code here
	previousGuesses = [];
	winningNumber = generateWinningNumber();
	$('#hintMessage, #result, #gameOver').remove();
	$('body').css({"background-color": "#0099cc", "background-image": ""});
	$('.content, h1, p').show();
}


/* **** Event Listeners/Handlers ****  */
(function(){
var winningNumber = generateWinningNumber();
var previousGuesses = [];
var numberOfGuessesAllowed = 5;

$('#submitGuess').click(function(previousGuesses){
	var playersGuess;
	playersGuessSubmission();
	checkGuess(previousGuesses);
})

$('#hintButton').click(function(){
	provideHint();
})

$('#reset').click(function(){
	playAgain();
})

$(document).keypress(function(event){
	if(event.keyCode === 13){
		playersGuessSubmission();
		checkGuess();
	}
})

}());

