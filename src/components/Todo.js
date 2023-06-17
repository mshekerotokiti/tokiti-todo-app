import React, { useState } from 'react';

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center bg-primary">Tokiti Todo App</h1>
      <form onSubmit={handleFormSubmit} className="d-flex mt-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter a task"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button type="submit" className="btn btn-primary ms-3">Add Todo</button>
      </form>
      <ul className="list-group mt-3">
        {todos.map((todo, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            {todo}
            <button
              className="btn btn-danger"
              onClick={() => handleDeleteTodo(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
