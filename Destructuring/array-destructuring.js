const colors = ["red", "green", "blue"];

// Old way
const first = colors[0];
const second = colors[1];
const third = colors[2];

// Destructuring ✅
const [forth, fifth, sisth] = colors;

console.log(forth);  // red
console.log(fifth); // green
console.log(sisth);  // blue