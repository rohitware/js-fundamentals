// SPREAD → breaks array/object INTO pieces
const arr = [1, 2, 3, 4];
console.log(...arr);  // 1 2 3 (separated)

// REST → collects pieces INTO array/object
function fn(...args) {
    console.log(args);
}
fn(1, 2, 3);

