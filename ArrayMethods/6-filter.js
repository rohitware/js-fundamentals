const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(numbers);

const filter = numbers.filter(num => num % 2 == 0);
console.log(filter);

///  realword example 

const ages = [23, 10, 20, 50, 60, 11];
const adults = ages.filter(age => age >= 18);
console.log(adults);
