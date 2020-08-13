import React, {useState, useEffect} from 'react';
import './App.css';
import {Button, InputLabel, FormControl, Input} from "@material-ui/core";
import Todo from "./Todo"
import db from "./firebase"
import firebase from "firebase"

function App() {
  const[todos, setTodos] = useState([])
  const [input, setInput] = useState("");
  console.log(input);

  //when the app loads need to listen to the database and fetch the new todos as they get added or removed
  //useEffect // basically it runs when the app loads
  useEffect(() => {
    // this code here ... fires when the app.js loads
    db.collection("todos").onSnapshot(snapshot => {
      console.log(snapshot.docs.map(doc => doc.data()))
    })
  }, [])
  
  
  const addTodo = (event) => {
    event.preventDefault();
    console.log(input)
    setTodos([...todos, input])
    setInput('') //
  }
  return (
    <div className="App">
      <h1>Hello world!!</h1>
      <form>

        <FormControl>

          <InputLabel> Write a todo</InputLabel>
            <Input 
              value = {input} 
              onChange = {event => setInput(event.target.value)} />

            
          </FormControl>
       
          <Button 
            disabled = {!input}
            type="submit"
            variant="contained" 
            color="primary" 
            onClick = {addTodo }>
            Add Todo
          </Button>
          </form>
          
        <ul>
          {todos.map(todo => (
              <Todo data ={todo}/>
          ))}
          
          
        </ul>
       
    </div>
  );
}

export default App;
