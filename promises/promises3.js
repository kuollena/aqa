async function gettodo (){
    const response = await fetch ('https://jsonplaceholder.typicode.com/todos/1')
    const data = await response.json();
    return data;
}

async function getuser () {
    const response = await fetch ('https://jsonplaceholder.typicode.com/users/1')
    const data = await response.json();
    return data;}   

    async function main() {
        try {
          const all = await Promise.all([gettodo(), getuser()]);
          console.log("Promise.all з async/await:", all);
          const race = await Promise.race([gettodo(), getuser()]);
          console.log("Promise.race з async/await:", race);
        } catch (err) {
          console.error("Помилка:", err);
        }
      }
      
      main();