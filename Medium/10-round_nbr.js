let pi = 3.141592653589793238;

console.log(`This is pi : ${pi} rounded to 2 decimals : ${pi.toFixed(2)} with toFixed method`);
console.log(`This is pi : ${pi} rounded to 5 decimals : ${pi.toFixed(5)} with toFixed method`);

console.log(`This is pi : ${pi} rounded to 2 decimals : ${Math.round(pi * 100) / 100} with Math.round method`);
console.log(`This is pi : ${pi} rounded to 5 decimals : ${Math.round(pi * 100000) / 100000} with Math.round method`);
