import React from 'react';

/* to satisfy the requirement of being able to complete a todo without removing it I dimmed the color for the completed todos with a ternary operator in the css call. Also (with a ternary) if the todo is active then i show the complete button, else 'Completed' */
function Todo({ todo, index, completeTodo }) {
    return (
        <div>
            <div style={{ color: todo.completed == 1 ? 'lightgrey' : 'black' }} className="todoText">{todo.text}</div>
            <div>{todo.completed == 0 ? <button onClick={() => completeTodo(index)}>Complete</button> : ' Completed'}</div>
        </div>

    )
}

export default Todo;