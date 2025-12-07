const car1 = {
    brand: "Toyota",
    model: "Highlander",
    year: 2020
};

const car2 = {
    brand: "Audi",
    model: "A6",
    owner: "John Smith"
};

const car3 = {...car1, ...car2};

console.log(car3);