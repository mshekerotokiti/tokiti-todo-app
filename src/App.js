import React from 'react';
import Todo from './components/Todo';

const App = () => {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand" href="#">Home</a>
          <a className="navbar-brand" href="#">About</a>
          <a className="navbar-brand" href="#">Contact</a>
          <a className="navbar-brand" href="#">Activities</a>
        </div>
      </nav>
      <div className="container mt-4">
        <Todo />
      </div>
    </div>
  );
};

export default App;
