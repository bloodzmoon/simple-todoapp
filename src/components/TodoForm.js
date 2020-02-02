import React, { useState } from 'react';
import uuid from 'uuid';
import '../css/TodoForm.css';

function TodoForm({ addTodo }) {
  const [todo, setTodo] = useState({
    id: '',
    task: '',
    done: false
  });
  
  function handleInputChange(e) {
    setTodo({ ...todo, task: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (todo.task.trim()) {
      addTodo({ ...todo, id: uuid.v4() })
      setTodo({ ...todo, task: '' });
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="task"
        type="text"
        value={todo.task}
        onChange={handleInputChange}
      />
      <button type="submit">ADD</button>
    </form>
  );
}

export default TodoForm;
