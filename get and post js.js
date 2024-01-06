/*let options = {
  method: "POST",
  headers: {
    "Content-type": "application/json"
  },
    body: JSON.stringify({
    title: 'shivam',
    body: 'bhai',
    userId: 1100,
  }),
}

fetch('https://jsonplaceholder.typicode.com/posts', options)
  .then((response) => response.json())
  .then((json) => console.log(json));
*/

/* now we will wrap it in asyn await function*/

/*const createTodo = async () => {
  let options = {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({
      title: 'shivam',
      body: 'bhai',
      userId: 1100,
    }),
  }

  let p = await fetch('https://jsonplaceholder.typicode.com/posts', options)
  let responce = await p.json()
  return responce
}

const mainFunc = async () =>{
  let todo = await createTodo()
  console.log(todo)
}
mainFunc()*/

// Now we will pass todo objects //
const createTodo = async (todo) => {
    let options = {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(todo),
    }
  
    let p = await fetch('https://jsonplaceholder.typicode.com/posts', options)
    let responce = await p.json()
    return responce
  }
  //get
  const getTodo = async (id)=>{
   let response = await fetch('https://jsonplaceholder.typicode.com/posts/' + id)
   let getr = await response.json()
    return getr
  }
  //post 
  const mainFunc = async () => {
    let todo = {
        title: 'shiv - vani',
        body: 'any',
        userId: 1100,
      }
    let todor = await createTodo(todo)
    console.log(todor)
    console.log(await getTodo(5))
  }
  
  mainFunc()