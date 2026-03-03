
async function myFunction() {
    return "Hello";
}
myFunction().then(result => console.log(result));


// using await

async function fetchData(params) {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    let data = await response.json();
    console.log(data);
}
fetchData();

// Error Handling
// Instead of .catch(), you can use try...catch:

async function getUser() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        let user = await response.json();
        console.log(user);

    } catch (error) {
        console.log("Error while fetching error", error);

    }
}
getUser();