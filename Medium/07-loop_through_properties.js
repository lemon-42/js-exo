const person = {
    name: "Citron",
    age: 666,
    goodAtProgramming: false,
    city: "France",
    favoriteColor: "Purple",
}

for (let elem in person) {
    console.log(elem, person[elem])
}