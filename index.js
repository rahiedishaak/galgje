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

// Pick word from array
let word = pickWord(words);

// Set number of attempts
let attempts = 5;

// Add Word to DOM