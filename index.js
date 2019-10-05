// Array with words that will be used for game
const words = ['Affenpinscher', 'Akita', 'Basenji', 'Beagle', 'Beauceron', 'Bergamasco', 'Chihuahua', 'Greyhound', 'Leonberger', 'Poedel'];

// Generate random index number to pick element from array
const generateRandomIndex = function(array) {
    return Math.floor(Math.random() * array.length);
};

// Function to pick word from array
const pickWord = function(array) {
    const index = generateRandomIndex(array);
    return array[index];
}

// Pick word from array, toLowerCase, split into array of letters
const splitWord = function(array) {
    let word = pickWord(array);
    word = word.toLowerCase();
    word = word.split('');
    return word;
}

// Get array of letters from picked word
let word = splitWord(words);

// Set number of attempts
let attempts = 5;

// Add Word to DOM
word.forEach(letter => {
    const wordEl = document.querySelector('#word');
    const spanEl = document.createElement('span');
    spanEl.textContent = '_';
    wordEl.appendChild(spanEl);
});