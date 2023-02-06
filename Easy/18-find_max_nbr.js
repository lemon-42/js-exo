let array = [1, 34, 2, 3, 4];
let largest = array[0];

for (let i = 0; i < array.length; i++) {
    if (largest < array[i]) {
        largest = array[i];
    }
}

console.log(largest);

// let max = Math.max(...array);