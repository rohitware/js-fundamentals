let str1 = " Hello";
let str2 = " World!";
let result = str1.concat(str2);
console.log(result); // Output: " Hello World!"

result = str1.concat(",", " Beautiful", str2);
console.log(result); // Output: " Hello, Beautiful World!"

result = str1.concat();
console.log(result); // Output: " Hello"

result = str1.concat("", str2);
console.log(result); // Output: " Hello World!"

result = str1.concat("!!!");
console.log(result); // Output: " Hello!!!" 


// new and modern way
result = `${str1} ${str2}`;
console.log(result);
