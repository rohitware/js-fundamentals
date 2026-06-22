function learnHTML() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`HTML Learned`);
        }, 1000);
    });
}

function learnCSS() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`CSS learned`);
        }, 1000);
    });
}
function learnJS() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`JS learned`);
        }, 1000);
    });
}

learnHTML()
    .then(result => {
        console.log(result);
        return learnCSS();
    })
    .then(result => {
        console.log(result);
        return learnJS();
    })
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    });