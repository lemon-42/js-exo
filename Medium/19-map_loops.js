const array  = [1, 2, 3, 4, 5];

const indexArray = array.map((value, index) => (index));
console.log(indexArray)

const doubleArray = array.map(value => value * 2);
console.log(doubleArray)