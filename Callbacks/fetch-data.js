function fetchData(callback) {
    setTimeout(() => {
        const data = { name: "Rohit", age: 25 };
        callback(data); // call when data is ready
    }, 2000);
}

console.log("Fetching data...");

fetchData(function (data) {
    console.log(`Got data: ${data.name}`);
});

console.log("Waiting...");

// Output:
// Fetching data...
// Waiting...
// Got data: Rohit  ← after 2 seconds