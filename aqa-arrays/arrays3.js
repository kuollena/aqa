const number = [10, 20, 30, 40, 50];
const sumOfElement = number.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(`Sum of all elements: ${sumOfElement}`);