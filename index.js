// EXAMPLE 1 - Get the first Character of a String in JavaScript

const str = 'bobbyhadz.com';

const firstChar = str.charAt(0);
console.log(firstChar); // 👉️ b

// ------------------------------------------------------------------

// // EXAMPLE 2 - Get the first Character of a String using bracket notation

// const str = 'bobbyhadz.com';

// const firstChar = str[0];
// console.log(firstChar); // 👉️ b

// console.log('abcd'[0]); // 👉️ a

// ------------------------------------------------------------------

// // EXAMPLE 3 - Get the first Character of a String using `String.at()`

// const str = 'bobbyhadz.com';

// const firstChar = str.at(0);
// console.log(firstChar); // 👉️ b

// console.log('abcd'.at(0)); // 👉️ a
// console.log(''.at(0)); // 👉️ undefined

// ------------------------------------------------------------------

// // EXAMPLE 4 - Get the first Character of a String using `String.slice()`

// const str = 'bobbyhadz.com';

// const firstChar = str.slice(0, 1);
// console.log(firstChar); // 👉️ b

// ------------------------------------------------------------------

// // EXAMPLE 5 - Get the first Character of a String using `String.substring()`

// const str = 'bobbyhadz.com';

// const firstChar = str.substring(0, 1);
// console.log(firstChar); // 👉️ b

// ------------------------------------------------------------------

// // EXAMPLE 6 - Get the first Character of a String using `Array.from()`

// const str = '🐴bobbyhadz.com';

// const firstChar = Array.from(str)[0];
// console.log(firstChar); // '🐴'
