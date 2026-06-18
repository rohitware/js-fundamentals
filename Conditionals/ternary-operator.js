// Syntax:
// condition ? "if true" : "if false"
const age = 20;
//Long way
if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}

// Ternary way ✅ one line!
let age_result = age > 18 ? "Adult" : "Minor";
console.log(age_result);

const marks = 80;
let result = marks > 50 ? "Pass" : "Fail";
console.log(result);


const balance = 10000;
let status = balance > 0 ? "Possitive" : "Negative";
console.log(status);

const isLogedIn = true;
let message = isLogedIn ? "Welcome" : "Please login";
console.log(message);
