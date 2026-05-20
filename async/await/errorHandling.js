function step1() {
    return promise = new Promise((resolve, reject) => {
        reject("Something went wrong");
    });
}

async function run() {

    try {
        let result = await step1();
        console.log(result);

    } catch (error) {
        console.log(error);
    }
}
run();