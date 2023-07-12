import './App.css';
import React, { useState } from 'react'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>To-Do List</h1>
        <form>
          <label>Task:</label>
          <input type="text"></input>
          <input type="submit"></input>
        </form>
      </header>
    </div>
  );
}

export default App;
