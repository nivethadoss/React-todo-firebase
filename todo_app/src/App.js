import React, {useState} from 'react';
import './App.css';

function App() {
  const[todos, setTodos] = useState(["Take dogs for a walk", "Take the rubbish out", "cooking"])
  const [input, setInput] = useState("")


  const addTodo = (event) => {
    setTodos([...todos, input])
  }
  return (
    <div className="App">
      <h1>Hello world!!</h1>
      <form>
      <input value = {input} onChange = {event => setInput(event.target.value)}/>
        <button onClick = {addTodo }>Add Todo</button>
          
        <ul>
          {todos.map(todo => (
              <li>{todo}</li>
          ))}
          
          
        </ul>
        </form>
    </div>
  );
}

export default App;
