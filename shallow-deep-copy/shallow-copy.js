const original = {
    name: 'Rohit',
    age: 30,
    address: {
        street: '123 Main St',
        city: 'Pune',
    }
};

// Shallow copy using Object.assign()
const shallowCopy = Object.assign({}, original);

// Modifying the shallow copy
shallowCopy.name = 'ketan';
shallowCopy.address.city = 'Mumbai';


console.log('Original:', original.name);
console.log('Original Address City:', original.address.city); // Output: Original Address City: Mumbai

console.log(`shallow copy : `, shallowCopy.name);
console.log(`shallow copy address city : `, shallowCopy.address.city);
