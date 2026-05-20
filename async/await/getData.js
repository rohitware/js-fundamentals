function getData() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Data loaded");
        }, 2000);
    });
}

async function showData() {
    const data = await getData();
    console.log(data);

}
showData();