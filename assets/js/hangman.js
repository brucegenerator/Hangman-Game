// Game Structure
// -----------------------
// GLOBAL VARIABLES

var words = [
    "lv426",
    "aliens",
    "sulaco",
    "jonesy",
    "marines",
    "hicks",
    "hudson",
    "acid",
    "claws",
    "ripley",
    "newt",
    "weyland",
    "yutani",
    ];

    var wordChoice = words[randomWord];
    var randomWord = Math.floor(Math.random() * words.length);
    var guessCounter = 5;
    var winCounter = 0;
    var lossCounter = 0;
    var blanks = [];

    var rightLetter = [];
    var wrongLetter = [];

    // DOM MANIPULATION
    // -------------------------

    var blanksHTML = document.getElementsByClassName("blanks");
    var rightGuess = document.getElementsByClassName("rightGuess");
    var wrongGuess = document.getElementsByClassName("wrongGuess");
    var wins = document.getElementsByClassName("wins").innerHTML = winCounter;
    var losses = document.getElementsByClassName("losses").innerHTML = lossCounter;
    
// START Game
// ---------------------------
    function startGame() {
        
    var randomWord = Math.floor(Math.random() * words.length);
    var guessCounter = 5;
    var winCounter = 0;
    var lossCounter = 0;
    blanks = 0;
    var rightLetter = [];
    var wrongLetter = [];
    
    var blanks = [];
    console.log(wordChoice);

    }

    function generateBlanks() {
        
    for (var i = 0; i < wordChoice.length; i++) {
        blanks.push("-");
        blanksHTML[0].textContent = blanks.join("");
    }
    return blanks;
    }


// GAME LOGIC
// --------------------------------

document.onkeyup = function(event) {
    var keycode = event.keyCode;
    var keyWord = String.fromCharCode(event.which);
  
    if (wordChoice.indexOf(keyWord) > -1) {
        rightLetter.push(keyWord);
        blanks[wordChoice.indexOf(keyWord)] = keyWord;
        blanksHTML[0].innerHTML = blanks.join("");
        rightGuess[0].innerHTML = rightLetter;
    }

    if(blanks.join("") === wordChoice) {
        winCounter++;
        alert("You Win" + " " + winCounter);
        startGame();
    
    }

    else if (!wordChoice.indexOf(keyWord) > -1) {
        wrongLetter.push(keyWord);
        blanksHTML[wordChoice.indexOf(keyWord)] = keyWord;
        blanksHTML[0].innerHTML = blanks.join(" ");
        wrongGuess[0].innerHTML = wrongLetter;
    }
    if(keyWord != wordChoice) {
        guessCounter--;
        console.log(guessCounter);

    if(guessCounter === 0) {
        lossCounter++;
        alert("You lose" + " " + lossCounter)
        startGame();
    }}};