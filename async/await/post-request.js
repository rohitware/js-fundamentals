async function createUser() {

    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                name: "Rohit",
                age: 28
            })
        }
    );

    const data = await response.json();

    console.log(data);

}

createUser();