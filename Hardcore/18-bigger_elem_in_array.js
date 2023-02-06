const biggerElem = (array) => {
    let bigger = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > bigger) {
            bigger = array[i];
        }
    }
    return bigger;
}

console.log(biggerElem([1, 2, 3, 4, 5, 77]))