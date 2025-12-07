const users = [
    { name: "Alice", age: 23 },
    { name: "Tommy", age: 34 },
    { name: "Neil", age: 28 }
];

for (const { name, age } of users) {
    console.log(`Name: ${name}, Age: ${age}`);
}

