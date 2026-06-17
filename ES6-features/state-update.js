const initialState = { name: "Rohit", age: 25, city: "Pune" };

// Update only city, keep rest same
const newState = { ...initialState, city: "Mumbai" };

console.log(newState);
// { name: "Rohit", age: 25, city: "Mumbai" }