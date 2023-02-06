const doubleArray = (array) => {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i] * 2);
    }
    return newArray;
}

console.log(doubleArray([1, 2, 3, 4, 5, 77]))