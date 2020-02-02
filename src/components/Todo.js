import React from 'react';
import '../css/Todo.css';

function Todo({ todo, toggleDone, removeTodo }) {

  function handleCheckbox() {
    toggleDone(todo.id);
  }

  function handleRemove() {
    removeTodo(todo.id);
  }

  return (
    <div className="item-container">
      <div className="wrapper">
        <input 
          className="checkbox" 
          type="checkbox" 
          onClick={handleCheckbox} 
          defaultChecked={todo.done}
        />
        <div className={ todo.done ? "line" : null }></div>
        <li 
          className={ todo.done ? "li-done" : "li-notdone" }
        >{todo.task}</li>
      </div>
      <button className="del" onClick={handleRemove}>x</button>
    </div>
  );
}

export default Todo;