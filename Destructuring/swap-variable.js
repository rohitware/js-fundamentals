let a = 10;
let b = 20;

//old way

// let temp = a;
// a = b;
// b = temp;



//// Destructuring way ✅ one line!

[a, b] = [b, a];
console.log("a", a);
console.log("b", b);