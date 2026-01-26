let text = "HELLO WORLD";
let result = text.slice(0, 5);
console.log(result);

//If you omit the second parameter, the method will slice out the rest of the string:
result = text.slice(6);
console.log(result);

//If a parameter is negative, the position is counted from the end of the string:
result = text.slice(-5);
console.log(result);

//You can also provide negative indices for both parameters:
result = text.slice(0, -6);
console.log(result);

//You can also provide negative indices for both parameters:
result = text.slice(-11, -6);
console.log(result);

//If you omit both parameters, the method will return a copy of the whole string:
result = text.slice();
console.log(result);    