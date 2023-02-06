let total = 0;

const sumArray = (array) => {

    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }

    return total;
}

console.log(sumArray([1,2,3,4,5]))