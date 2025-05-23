const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30
};

person.email = "test@test.com";
delete person.age;
console.log(person);