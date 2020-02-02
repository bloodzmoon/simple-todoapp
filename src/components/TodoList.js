import React from 'react';
import Todo from './Todo';

function TodoList({ todos, toggleDone, removeTodo }) {
  return (
    <ul>
      {todos.map(todo => (
        <Todo 
          key={todo.id} 
          todo={todo} 
          toggleDone={toggleDone}
          removeTodo={removeTodo} 
        />
      ))}
    </ul>
  );
}

export default TodoList;