// DOM Elements
const wordEl = document.querySelector('#word');
const attemptsEl = document.querySelector('#attempts');
const attemptsElSpan = document.querySelector('#attempts-number');
const guessedLettersEl = document.querySelector('#guessed-letters');

// Array with words that will be used for game
const words = ['HTML', 'CSS', 'Javascript', 'ReactJS', 'NodeJS', 'MongoDB', 'Python', 'PHP', 'MySQL', 'Ruby'];

// Generate random index number to pick element from array
const generateRandomIndex = function(array) {
    return Math.floor(Math.random() * array.length);
};

// Function to pick element from array
const picElement = function(array) {
    const index = generateRandomIndex(array);
    return array[index];
}

// Pick word from array, toLowerCase, split into array of letters
const splitWord = function(array) {
    let word = picElement(array);
    word = word.toLowerCase();
    word = word.split('');
    return word;
}

// Get array of letters from picked word
let word = splitWord(words);

// Set number of attempts
let attempts = 5;

// Array with guessed letters
let guessedLetters = [];

// Add Word to DOM
const renderLetters = function() {
    wordEl.textContent = '';

    word.forEach(letter => {
        const spanEl = document.createElement('span');
        if(guessedLetters.includes(letter)) {
            spanEl.textContent = letter;
        } else {
            spanEl.textContent = '_';
        }
        wordEl.appendChild(spanEl);
    });
}

const renderAttempts = function() {
    attemptsElSpan.textContent = attempts;
};

const checkComplete = function() {
    const correctLetters = document.querySelectorAll('#word span');
    let allGuessed = true;

    correctLetters.forEach(letter => {
        if (letter.textContent === '_') {
            allGuessed = false;
        }
    })

    if (allGuessed) {
        attemptsEl.textContent = 'Je hebt gewonnen!';
    }
}

const gameOver = function() {
    attemptsEl.textContent = 'Game Over! Hierboven zie je het juiste antwoord.';
    wordEl.textContent = '';
    word.forEach(letter => {
        const spanEl = document.createElement('span');
        spanEl.textContent = letter;
        wordEl.appendChild(spanEl);
    });
}

renderLetters();
renderAttempts();

document.addEventListener('keypress', function(e) {
    if (((e.keyCode >= 97 && e.keyCode <= 122) || (e.keyCode >= 65 && e.keyCode <= 90)) && attempts > 0) {
        letterGuess = e.key.toLowerCase();
        if (!guessedLetters.includes(letterGuess)) {
            guessedLetters.push(letterGuess);
    
            const spanEl = document.createElement('span');
            spanEl.textContent = letterGuess;
            guessedLettersEl.appendChild(spanEl);

            if (word.includes(letterGuess)) {
                renderLetters();
                checkComplete();
            } else {
                attempts--;
                if (attempts === 0) {
                    gameOver();
                } else {
                    renderAttempts();
                }
            }
        }
    }
});