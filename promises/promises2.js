function gettodo (){
    return fetch ('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => {response.json()})
}

function getuser () {
    return fetch ('https://jsonplaceholder.typicode.com/users/1')
    .then(response => response.json())
}   

Promise.all([gettodo(), getuser()])
  .then(([todo, user]) => {
    console.log("Promise.all результат:");
    console.log("Todo:", todo);
    console.log("User:", user);
  })
  .catch(err => console.error("Помилка:", err));
Promise.race([gettodo(), getuser()])
  .then(result => {
    console.log("Promise.race результат:", result);
  })
  .catch(err => console.error("Помилка:", err));