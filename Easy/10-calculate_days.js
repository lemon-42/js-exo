let currentDate = new Date();
let futureDate = new Date(2023, 2, 28);


let difference = futureDate - currentDate;

let days = Math.round(difference / (1000 * 60 * 60 * 24)); // 1000 milliseconds in a second, 60 seconds in a minute, 60 minutes in an hour, 24 hours in a day

console.log(`There are ${days} days between ${currentDate} and ${futureDate}`);