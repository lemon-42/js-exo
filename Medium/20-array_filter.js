let person = [
    {name: "Citron", skills: 1},
    {name: "Alice", skills: 9001},
    {name: "Aptura", skills: 5001},
    {name: "Arksum", skills: 5002},
]

let skillsCheck = person.filter(person => person.skills > 5000);

console.log(skillsCheck);

console.log(`The following people have more than 5000 skills: ${skillsCheck.map(people => people.name)}`)