let str = "Hello World";
let words = str.split(" ");
console.log(words); // Output: [ 'Hello', 'World' ]

let chars = str.split("");
console.log(chars); // Output: [ 'H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd' ]

let limited = str.split(" ", 1);
console.log(limited); // Output: [ 'Hello' ]

let noDelimiter = str.split();
console.log(noDelimiter); // Output: [ 'Hello World' ]

let commaSeparated = "apple,banana,cherry";
let fruits = commaSeparated.split(",");
console.log(fruits); // Output: [ 'apple', 'banana', 'cherry' ]

let multiDelimiter = "one,two;three four";
let parts = multiDelimiter.split(/[,; ]/);
console.log(parts); // Output: [ 'one', 'two', 'three', 'four' ]

let emptyString = "abc";
let result = emptyString.split("");
console.log(result); // Output: [ 'a', 'b', 'c' ]

let noSplit = "xyz";
let singleElementArray = noSplit.split(";");
console.log(singleElementArray); // Output: [ 'xyz' ]