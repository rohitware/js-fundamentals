// Challenge 3 — MAP
// Count how many times each number appears
const numbers = [1, 2, 3, 1, 2, 1, 3, 3, 3];
// Expected: Map { 1→3, 2→2, 3→4 }

const map = new Map();

numbers.forEach(num => {
    if (map.has(num)) {
        map.set(num, map.get(num) + 1);
    } else {
        map.set(num, 1);
    }
});
console.log(map);


// Challenge 4 — MAP
// Print only students with marks > 70
const students = new Map([
    ["Rohit", 85],
    ["Amit", 60],
    ["Raj", 75]
]);

students.forEach((marks, name) => {
    if (marks > 70) {
        console.log(`Marks: ${marks} Name: ${name}`);
    }
})