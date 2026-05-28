function calculate(a, b, callback) {
    const result = callback(a, b);
    console.log(`Result : ${result}`);
}

// addition 
calculate(10, 5, (a, b) => a + b);

// substraction
calculate(20, 2, (a, b) => a - b);

//multiplication
calculate(3, 5, (a, b) => a * b);

// division
calculate(20, 2, (a, b) => a / b);