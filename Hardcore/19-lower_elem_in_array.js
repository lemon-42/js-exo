const lowestElemInArray = (array) => {
    let lowest = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < lowest) {
            lowest = array[i];
        }
    }
    return lowest;
}

console.log(lowestElemInArray([1, 2, 3, 4, 5, 77]))