const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

const WORDS = [
  'strawberry',
  'orange',
  'apple',
  'banana',
  'pineapple',
  'kiwi',
  'peach',
  'pecan',
  'eggplant',
  'durian',
  'peanut',
  'chocolate',
];

const numWrong = 0;

// Loop over the chars in `word` and create divs.xww
//
const createDivsForChars = (word) => {
  for (const letter of word) {
    const container = document.querySelector('#word-container')
    container.insertAdjacentHTML('beforeend',`<div class="letter-box ${letter}"></div>`);
  }
};

// Loop over each letter in the alphabet and generate a button
// for each letter
const generateLetterButtons = () => {
  for (const char of ALPHABET) {
    const buttons = document.querySelector('#letter-buttons')
    buttons.insertAdjacentHTML('beforeend', `<button> ${char} </button>`);
  }
};

// Set the `disabled` property of `buttonEl` to `true.
//
// `buttonEl` is an `HTMLElement` object.
//
const disableLetterButton = buttonEl => {
  buttonEl.disabled = true;
}

// This is a helper function we will use in the future
// It should return `true` if `letter` is in the word
// For now, you should test it out to make sure it works

const isLetterInWord = letter => document.querySelector(`div.${letter}`) !== null;
  //const variable to get the letter-box class
  //if the variable is in word
  //return true

// This is like if __name__ == '__main__' in Python
// It will be called when the file is run (because
// we call the function on line 66)
(function startGame() {
  // For now, we'll hardcode the word that the user has to guess
  // You can change this to choose a random word from WORDS once you
  // finish this lab but we hard code it so we know what the word is
  // and can tell if things look correct for this word
  const word = 'hello';

  // call the function that makes an empty line for each letter in the word
  createDivsForChars(word)
  // call the function that makes a button for each letter in the alphabet
  generateLetterButtons()
  // in the next lab, you will be adding functionality to handle when
  // someone clicks on a letter
})();
