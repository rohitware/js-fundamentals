const originalObject = {
    name: "Rohit",
    age: 30,
    address: {
        street: "123 Main St",
        city: "Pune",
    }
};

// Shallow copy using spread operator
const shallowCopy = { ...originalObject };

// Modifying the shallow copy
shallowCopy.name = "Ketan";
shallowCopy.address.city = "Mumbai";

console.log("Original:", originalObject.name); // Output: Original: Rohit
console.log("Original Address City:", originalObject.address.city); // Output: Original Address City: Mumbai

console.log(`Shallow copy:`, shallowCopy.name); // Output: Shallow copy: Ketan
console.log(`Shallow copy address city:`, shallowCopy.address.city); // Output: Shallow copy address city: Mumbai   
