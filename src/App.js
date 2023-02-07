// import logo from './logo.svg';
import React, { useState } from "react";
import './App.css';

import davyPic from "./davy_pic.png";


function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <img src={davyPic} className="App-logo" alt="logo" />
        <p>
          My name is Davy Bossin. I am a third year computer science student at UVic and I am learning React!
        </p>
        <a
          className="App-link"
          href="https://github.com/ohboii19"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check out my GitHub
        </a>
        <div
        className="Buttons"
        >
          <button
          className="Button"
          onClick={() => setCount(count + 1)}
          >
            Increment
          </button>
          <button
          className="Button"
          onClick={() => setCount(count - 1)}
          >
            Decrement
          </button>
          <button
          className="Button"
          onClick={() => setCount(0)}
          >
            Clear
          </button>
        </div>
        <p>
         {count}
        </p>
      </header>
    </div>
  );
}

export default App;
