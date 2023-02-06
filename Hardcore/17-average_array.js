let total = 0;

const average = (array) => {

    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }

    return total / array.length;

}

console.log(average([1,2,3,4,5]))