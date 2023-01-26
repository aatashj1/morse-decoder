const MORSE_TABLE = {
 '.-': 'a',
 '-...': 'b',
 '-.-.': 'c',
 '-..': 'd',
 '.': 'e',
 '..-.': 'f',
 '--.': 'g',
 '....': 'h',
 '..': 'i',
 '.---': 'j',
 '-.-': 'k',
 '.-..': 'l',
 '--': 'm',
 '-.': 'n',
 '---': 'o',
 '.--.': 'p',
 '--.-': 'q',
 '.-.': 'r',
 '...': 's',
 '-': 't',
 '..-': 'u',
 '...-': 'v',
 '.--': 'w',
 '-..-': 'x',
 '-.--': 'y',
 '--..': 'z',
 '.----': '1',
 '..---': '2',
 '...--': '3',
 '....-': '4',
 '.....': '5',
 '-....': '6',
 '--...': '7',
 '---..': '8',
 '----.': '9',
 '-----': '0',
};


function decode(expr) {
 let arrayOf10Symbols = Get10LettersFromWord(expr);
 let result = "";
 for (let i = 0; i < arrayOf10Symbols.length; i++) {
  if (arrayOf10Symbols[i] === "**********") {
   result += " ";
   continue;
  }
  let morzeLetter = getLetterFrom10Symbols(arrayOf10Symbols[i]);
  result += MORSE_TABLE[morzeLetter];
 }
 return result;
}

function getLetterFrom10Symbols(codedString) {
 let result = "";
 for (let j = 0; j < codedString.length; j += 2) {
  let partOfEncodedLetter = codedString.substring(j, j + 2);
  let partOfMorze;
  if (partOfEncodedLetter === "10") {
   partOfMorze = ".";
  } else if (partOfEncodedLetter === "11") {
   partOfMorze = "-";
  } else {
   continue;
  }
  result += partOfMorze;
 }
 return result;
}

function Get10LettersFromWord(bigWord) {
 let result = [];
 for (let i = 0; i < bigWord.length; i += 10) {
  let word = bigWord.substring(i, i + 10);
  result.push(word);
 }
 return result;
}


module.exports = {
 decode
};