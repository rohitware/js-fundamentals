const user = { name: "Ramesh", age: 25 };
const address = { city: "Pune", country: "India" };

// Merge objects
const full = { ...user, ...address };
console.log(full);


// Copy and update one field
const update = { ...user, age: 30 }
console.log(update);


// Add new fields
const withRole = { ...user, Role: "admin" };
console.log(withRole);
