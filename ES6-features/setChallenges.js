// Challenge 1 — SET
// Remove duplicates from this array
const nums = [1, 2, 3, 2, 4, 3, 5, 1];
// Expected: [1, 2, 3, 4, 5]

const uniqueNum = [...new Set(nums)];
console.log(uniqueNum);

// Challenge 2 — SET
// Find common items between 2 arrays
const arr1 = ["apple", "banana", "mango"];
const arr2 = ["banana", "grapes", "mango"];


const set1 = new Set(arr1);
const commonItem = arr2.filter(item => set1.has(item));
console.log(commonItem);
