let array = [17, 34, 2, 321, 94];
let lowest = array[0];

for (let i = 0; i < array.length; i++) {
    if (lowest > array[i]) {
        lowest = array[i];
    }
}

console.log(lowest);

// let lowest = Math.min(...array);