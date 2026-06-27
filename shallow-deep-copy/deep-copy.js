const originalObject = {
    name: "Rohit",
    age: 30,
    address: {
        street: "123 Main St",
        city: "Pune"
    }
};

// Deep copy using JSON methods
const deepCopy = JSON.parse(JSON.stringify(originalObject));

// Modifying the deep copy
deepCopy.name = "Ketan";
deepCopy.address.city = "Mumbai";

console.log("Original:", originalObject.name); // Output: Original: Rohit
console.log("Original Address City:", originalObject.address.city); // Output: Original Address City: Pune

console.log(`Deep copy:`, deepCopy.name); // Output: Deep copy: Ketan
console.log(`Deep copy address city:`, deepCopy.address.city); // Output: Deep copy address city: Mumbai 