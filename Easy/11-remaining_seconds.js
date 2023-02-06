// Write a program that calculates the remaining seconds until the end of the day
 
let currentDate = new Date();
let end = new Date();
end.setUTCHours(23,59,59,999);

let remainingSeconds = (end - currentDate) / 1000;

console.log(`There are ${remainingSeconds} seconds remaining until the end of the day`)