// create set
const letters = new Set();

console.log(letters);

//add values to set
letters.add("a");
letters.add("b");
letters.add("c");
letters.add("c");
letters.add("c");
letters.add("c");
letters.add("c");
letters.add("c");

console.log(letters);

// The number of elements are
let sizeOfSet = letters.size;
console.log(`size of set is ${sizeOfSet}`);


// List all Elements
let text = "";
for (const x of letters) {
    text += x;
}
console.log(text);
