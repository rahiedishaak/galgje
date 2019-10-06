// DOM Elements
const wordEl = document.querySelector('#word');
const attemptsEl = document.querySelector('#attempts');
const attemptsElSpan = document.querySelector('#attempts-number');
const guessedMessageEl = document.createElement('span');
const guessedLettersEl = document.querySelector('#guessed-letters');
const resetBtn = document.querySelector('#btn-reset');

// Array with words that will be used for game
const words = ['HTML', 'CSS', 'Javascript', 'ReactJS', 'NodeJS', 'MongoDB', 'Python', 'PHP', 'MySQL', 'Ruby'];

// Generate random index number to pick element from array
const generateRandomIndex = array => Math.floor(Math.random() * array.length);

// Function to pick element from array
const picElement = array => array[generateRandomIndex(array)];

// Pick word from array, toLowerCase, split into array of letters
const splitWord = array => picElement(array).toLowerCase().split('');

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
        resetBtn.textContent = 'Win nog een keer!'
        isPlaying = false;
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

// Game variables
let attempts;
let word;
let guessedLetters;
let isPlaying;

// Start Game
const startGame = () => {
    word = splitWord(words);
    attempts = 5;
    isPlaying = true;
    guessedLetters = [];
    guessedLettersEl.innerHTML = ''
    guessedMessageEl.textContent = 'Raad letters via je toetsenbord';
    guessedLettersEl.appendChild(guessedMessageEl);
    resetBtn.textContent = 'Herstart';
    renderLetters();
    renderAttempts();
}

startGame();

document.addEventListener('keypress', function(e) {
    if (((e.keyCode >= 97 && e.keyCode <= 122) || (e.keyCode >= 65 && e.keyCode <= 90)) && attempts > 0 && isPlaying) {
        letterGuess = e.key.toLowerCase();
        if (!guessedLetters.includes(letterGuess)) {
            guessedLetters.push(letterGuess);

            guessedMessageEl.textContent = 'Al gegokte letters: '    
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
                    isPlaying = false;
                } else {
                    renderAttempts();
                }
            }
        }
    }
});

resetBtn.addEventListener('click', startGame);