// Array with words that will be used for game
const words = ['Affenpinscher', 'Akita', 'Basenji', 'Beagle', 'Beauceron', 'Bergamasco', 'Chihuahua', 'Greyhound', 'Leonberger', 'Poedel'];

// Generate random index number to pick element from array
const generateRandomIndex = function(array) {
    return Math.floor(Math.random() * array.length);
};