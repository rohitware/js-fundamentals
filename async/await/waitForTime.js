async function myDispley() {
    let myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("I Love You after 3 second")
        }, 3000);
    });
    let result = await myPromise;
    console.log(result);

}
myDispley();
