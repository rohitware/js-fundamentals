function sum(...numbers) {
    return numbers.reduce((acc, n) => acc + n, 0);
}

console.log(sum(3, 3));
console.log(sum(2, 3, 4));
console.log(sum(2, 3, 4, 5, 6));