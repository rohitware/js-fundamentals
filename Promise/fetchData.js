function fetchData() {
    return new Promise((resolve, reject) => {
        let raddom = Math.random();

        if (raddom > 0.5) {
            resolve({ name: "Rohit", age: 25 })
        } else {
            reject("Something went wrong");
        }
    });
}


// using promise

fetchData()

    .then(res => {
        console.log("Success", res.name);
    })

    .catch(error => {
        console.log("Error accures");
    })