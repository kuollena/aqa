const car1 ={
    brand: "BMW",
    model: "X5",
    year: 2020,
}

const car2 ={
    brand: "BMW",
    model: "X5",
    owner: "John Doe",
}

const car3 ={...car1, ...car2}
console.log(car3);