async function getData() {
    return "Data Recived";
}

async function showData() {
    const data = await getData();
    console.log(data);
}
showData();