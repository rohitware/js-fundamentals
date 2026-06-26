function totalmarks(...marks) {
    let sum = 0;
    for (let mark of marks) {
        sum += mark;
    }
    return sum;
}

console.log(totalmarks(80, 90, 70));
console.log(totalmarks(75, 85, 95, 65));
