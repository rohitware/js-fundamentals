const htmlCourse = new Promise(resolve => {
    setTimeout(() => {
        resolve("HTML Downloaded");
    }, 1000);
});

const cssCourse = new Promise(resolve => {
    setTimeout(() => {
        resolve("CSS Downloaded");
    }, 2000);
});

const jsCourse = new Promise(resolve => {
    setTimeout(() => {
        resolve("JavaScript Downloaded");
    }, 3000);
});

Promise.all([
    htmlCourse,
    cssCourse,
    jsCourse
])
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    });