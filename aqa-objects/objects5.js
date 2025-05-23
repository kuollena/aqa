const users = [
    {name: "John Doe", age: 30, email: "test@test.com"},
    {name: "Jane Smith", age: 25, email: "test2@test.com"},
    {name: "Bob Johnson", age: 40, email: "test3@test.com"}
]

 for (const { name, email, age } of users) {
    console.log(`Name: ${name}, Email: ${email}, Age: ${age}`);
  }



