function FetchUserData(userId) {
    return new Promise((resolve, reject) => {
        console.log("Fetching data");

        setTimeout(() => {
            if (userId === 1) {
                resolve({ id: 1, name: "Rohit", city: "Pune" })
            } else {
                reject("User not found");
            }
        }, 2000);

    });
}

FetchUserData(1)
    .then(user => {
        console.log(`Name: ${user.name}`);
        console.log(`City: ${user.city}`);
    })
    .catch(error => {
        console.log(`Error: ${error}`);
    })
    .finally(() => {
        console.log(`Requsted completed`);
    })


// Test with wrong userId
FetchUserData(99)
    .then(user => {
        console.log(user);
    })
    .catch(error => {
        console.log(error);
    })