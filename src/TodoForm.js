import React, { useState } from 'react';

function TodoForm({ addTodo }) {
    //set the values into state dynamically
    const [value, setValue] = useState('');

    //on submit, don't let the form submit, check that the user didn't enter a blank field (will put in some error messages for the user later), commit the value into the "datastore" and clear the value from the form field
    const doSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue('');
    }

    return (
        <form onSubmit={doSubmit}>
            <input type="text" className="formInput" value={value} onChange={e => setValue(e.target.value)} placeholder="... add your todo here" /> Add your todo, press enter
      </form>
    )
}

export default TodoForm;