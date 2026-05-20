async function loadData() {

    try {

        let response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );
        console.log(response.status);

        if (!response.ok) {
            throw new Error("HTTP Error: " + response.status);
        }

        let data = await response.json();

        console.log(data);

    } catch (error) {

        console.log(error.message);

    }

}

loadData();