const colors = ["red", "green", "blue"];
// old way
const oldRed = colors[0];
const oldGreen = colors[1];
console.log(oldRed, oldGreen);


// es6 way

const [firstColor, secondColor, thirdColor] = colors;
console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);


