// 1. The Callback Function (The Tool)
function displayResult(value) {
    console.log(`The final answer is: ${value}`);
}

// 2. The Outer Function (The Problem Solver)
function calculateSum(num1, num2, callback) {
    let sum = num1 + num2;

    // Running the callback function we passed in
    callback(sum);
}

// 3. Execution
// Note: We pass 'displayResult' by name WITHOUT parentheses ()
calculateSum(5, 10, displayResult);