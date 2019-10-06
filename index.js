// Select DOM Elements
const wordEl = document.querySelector('#word');
const attemptsEl = document.querySelector('#attempts');
const guessedLettersEl = document.querySelector('#guessed-letters');
const guessedMessageEl = document.createElement('span');
const resetBtn = document.querySelector('#btn-reset');

// Array with words that will be used for game
const words = ['etuis', 'aquarelletje', 'hyenalach', 'gesticuleren', 'irrelevant', 'reclamebureau', 'ridicuul', 'cachet', 'radioactief', 'claxoneren'];

// Generate random index number to pick element from array
const generateRandomIndex = array => Math.floor(Math.random() * array.length);

// Function to pick element from array
const picElement = array => array[generateRandomIndex(array)];

// Pick word from array, toLowerCase, split into array of letters
const splitWord = array => picElement(array).toLowerCase().split('');

// Add Word to DOM
const renderLetters = word => {
    wordEl.textContent = '';

    word.forEach(letter => {
        const spanEl = document.createElement('span');

        if(guessedLetters.includes(letter)) spanEl.textContent = letter;
        else spanEl.textContent = '_';
        
        wordEl.appendChild(spanEl);
    });
};

// Render Attempts to DOM
const renderAttempts = () => {
    attemptsEl.textContent = `Aantal pogingen resterend: ${attempts}`;
};

// Check if user already guessed the word
const checkComplete = () => {
    const letters = document.querySelectorAll('#word span');
    let allGuessed = true;

    letters.forEach(letter => {
        if (letter.textContent === '_') allGuessed = false;
    });

    if (allGuessed) {
        attemptsEl.textContent = 'Je hebt gewonnen! Goed gedaan!';
        resetBtn.textContent = 'Win nog een keer!'
        isPlaying = false;
    }
};

// Code to run when user has no more attempts left
const gameOver = word => {
    attemptsEl.textContent = 'Game Over! Dit is het juiste antwoord.';
    wordEl.textContent = '';
    word.forEach(letter => {
        const spanEl = document.createElement('span');
        spanEl.textContent = letter;
        wordEl.appendChild(spanEl);
    });
    isPlaying = false;
};

// Game variables
let word;
let attempts;
let isPlaying;
let guessedLetters;

// Start new game
const startGame = () => {
    word = splitWord(words);
    attempts = 5;
    isPlaying = true;
    guessedLetters = [];
    renderLetters(word);
    renderAttempts();
    guessedLettersEl.innerHTML = ''
    guessedMessageEl.textContent = 'Raad letters via je toetsenbord';
    guessedLettersEl.appendChild(guessedMessageEl);
    resetBtn.textContent = 'Herstart';
};

document.addEventListener('keypress', function(e) {
    if (((e.keyCode >= 97 && e.keyCode <= 122) || (e.keyCode >= 65 && e.keyCode <= 90)) && isPlaying) {
        letterGuess = e.key.toLowerCase();

        if (!guessedLetters.includes(letterGuess)) {
            guessedLetters.push(letterGuess);

            if (word.includes(letterGuess)) {
                renderLetters(word);
                checkComplete();
            } else {
                guessedMessageEl.textContent = 'Fout geraden letters: '
                const spanEl = document.createElement('span');
                spanEl.textContent = letterGuess;
                guessedLettersEl.appendChild(spanEl);
                
                attempts--;
                if (attempts === 0) gameOver(word);
                else renderAttempts();
            }            
        }
    }
});

resetBtn.addEventListener('click', startGame);

startGame();