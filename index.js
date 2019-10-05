
// Function to pick word from array
const pickWord = function(array) {
    const index = generateRandomIndex(array);
    return array[index];
}

// Pick word from array
let word = pickWord(words);