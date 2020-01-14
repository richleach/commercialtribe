import React, { useState } from 'react';

import './App.css';

import Todo from './Todo';
import TodoForm from './TodoForm';

function App() {
  //setting count buckets to track number of open and complete todos
  const [countopen, setCountopen] = useState(0);
  const [countcomplete, setCountcomplete] = useState(0);
  //set the todos into state. Normally i'd make a service call or a graphql query/mutation call but my server side code is down....
  const [todos, setTodos] = useState([
    {
      text: 'Todo item 1',
      completed: '0'
    },
    {
      text: 'Todo item 2',
      completed: '0'
    },
    {
      text: 'Todo item 3',
      completed: '1'
    },
    {
      text: 'Todo item 4',
      completed: '0'
    },
    {
      text: 'Todo item 5',
      completed: '0'
    }
  ])

  //adding a todo to the todo list. First the text, but then the completed element gets set to 0 "not completed" (have to give the user a chance to complete the task)
  const addTodo = text => {
    const newTodos = [...todos, { text }];
    const newLength = newTodos.length - 1;
    newTodos[newLength].completed = 0;
    setTodos(newTodos);
  }

  //tallying the completed vs open todos - I know this is a core req but I ran out of time trying to get the app to call it
  const tallyTodos = todos => {
    todos.map((todo, index) => {
      //console.log(todo[index].completed);
      if (todo[index].completed === 0) {
        setCountopen(countopen + 1);
      } else {
        setCountcomplete(countcomplete + 1);
      }
    })
  }

  //on clicking the complete button the todo.completed part gets updated to 1 "completed"  
  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].completed = 1;
    setTodos(newTodos);
  }

  //loop (map) over each todo and run the Todo function to render it. The Todo and the TodoForm are in their own components.  
  return (
    <div className="App">
      <h2>Todos!<br />
        rich@cfsnap.com</h2>
      <div className="todo-list">
        {
          todos.map((todo, index) => (
            <Todo key={index} index={index} todo={todo} completeTodo={completeTodo} tallyTodos={tallyTodos} />
          ))

        }
        Open: {countopen} Closed: {countcomplete}
      </div>
      <div>
      </div>
      <div>
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;