import React from 'react';

function Todo({ todo, toggleDone, removeTodo }) {

  function handleCheckbox() {
    toggleDone(todo.id);
  }

  function handleRemove() {
    removeTodo(todo.id);
  }

  return (
    <div style={{ display: "flex" }}>
      <input type="checkbox" onClick={handleCheckbox} />
      <li 
        style={{
          color: "white",
          textDecoration: todo.done ? "line-through" : null
        }}
      >{todo.task}</li>
      <button onClick={handleRemove}>X</button>
    </div>
  );
}

export default Todo;