const temperature = 25;

if (temperature > 30) {
    console.log("It's a hot day.");
} else if (temperature >= 20 && temperature <= 30) {
    console.log("It's a pleasant day.");
} else if (temperature >= 10 && temperature < 20) {
    console.log("It's a bit chilly.");
} else {
    console.log("It's cold outside.");
}