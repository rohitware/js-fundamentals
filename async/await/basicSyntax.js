async function myDispley() {
    try {
        let myPromise = new Promise((resolve, reject) => {
            resolve("I Love You");
        });
        let result = await myPromise
        console.log(result);

    } catch (error) {
        console.error("Something went wrong:", error);
    }

}
myDispley()