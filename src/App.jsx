import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'






function App() {
  // ["alice", "bob", "charlie", "danielle"]
  const [todo, setTodo] = useState(["eat", "clean", "exercise", "watch"])

  function addItem() {
    setTodo(prevtodo => {
      // in react usestate we can't use push() to avoid changing the state directly, intead we spread the array ....prev
      return [...prevtodo, 'add']
    })
  }

  const applicants = todo.map((name) => {
    return <p >need to {name}</p>
  })

  return (
    <div className="App">
      <input type="text" name="" id="" />
      <button onClick={addItem}>Add Item</button>
      {applicants}
    </div>
  )


}

export default App
