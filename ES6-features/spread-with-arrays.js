const a = [1, 2, 3];
const b = [4, 5, 6];

const combine = [...a, ...b];
console.log(combine);

//copy array

const copy = [...a];
copy.push(99);
console.log(a);          // [1, 2, 3] ← original safe
console.log(copy);       // [1, 2, 3, 99]


