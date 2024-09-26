// create a function to take in a string and determine if it is English or Braille
// and run a function based on that

// create a function that takes a Braille string and converts to English

// declare the braille dictionary keys and values
const brailleDictionary = {
  a: "0.....",
  b: "0.0...",
  c: "00....",
  d: "00.0..",
  e: "0..0..",
  f: "000...",
  g: "0000..",
  h: "0.00..",
  i: ".00...",
  j: ".000..",
  k: "0...0.",
  l: "0.0.0.",
  m: "00..0.",
  n: "00.00.",
  o: "0..00.",
  p: "000.0.",
  q: "00000.",
  r: "0.000.",
  s: ".00.0.",
  t: ".0000.",
  u: "0...00",
  v: "0.0.00",
  w: ".000.0",
  x: "00..00",
  y: "00.000",
  z: "0..000",
  1: "0.....",
  2: "0.0...",
  3: "00....",
  4: "00.0..",
  5: "0..0..",
  6: "000...",
  7: "0000..",
  8: "0.00..",
  9: ".00...",
  0: ".000..",
  capital: ".....0",
  number: ".0.000",
  space: "......",
};

// declare the english letters dictionary keys and values
const englishLetterDictionary = {
  "0.....": "a",
  "0.0...": "b",
  "00....": "c",
  "00.0..": "d",
  "0..0..": "e",
  "000...": "f",
  "0000..": "g",
  "0.00..": "h",
  ".00...": "i",
  ".000..": "j",
  "0...0.": "k",
  "0.0.0.": "l",
  "00..0.": "m",
  "00.00.": "n",
  "0..00.": "o",
  "000.0.": "p",
  "00000.": "q",
  "0.000.": "r",
  ".00.0.": "s",
  ".0000.": "t",
  "0...00": "u",
  "0.0.00": "v",
  ".000.0": "w",
  "00..00": "x",
  "00.000": "y",
  "0..000": "z",
  ".....0": "capital",
  "......": " ",
};

// declare the numbers dictionary
const numberDictionary = {
  "0.....": "1",
  "0.0...": "2",
  "00....": "3",
  "00.0..": "4",
  "0..0..": "5",
  "000...": "6",
  "0000..": "7",
  "0.00..": "8",
  ".00...": "9",
  ".000..": "0",
};

// create Braille translation function
function toBraille(string) {
  let newArray = Array.from(string);
  let results = [];
  let prevIsNumber = false;

  newArray.forEach((character) => {
    // check if character is a number
    if (character >= "0" && character <= "9") {
      if (prevIsNumber) {
        results.push(brailleDictionary[character]);
      } else {
        results.push(brailleDictionary["number"], brailleDictionary[character]);
        prevIsNumber = true;
      }
    }
    // check if character is a space and set prevIsNumber to false
    else if (character === " ") {
      prevIsNumber = false;
      results.push(brailleDictionary["space"]);
    }
    // check if character is upper case and handle
    else if (character.toUpperCase() === character) {
      results.push(
        brailleDictionary["capital"],
        brailleDictionary[character.toLowerCase()]
      );
    }
    // if no other conditions are met, regular letter
    else {
      results.push(brailleDictionary[character]);
    }
  });
}
