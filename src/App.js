// import logo from './logo.svg';
import React, { useState } from "react";
import Header from "./Header/Header.js"
import Counter from "./Counter/Counter.js"
import QuoteGen from "./QuoteGen/QuoteGen.js";
import './App.css';

import davyPic from "./davy_pic.png";


function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <Header />
      <body className="App-body">
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
        <Counter />
      <QuoteGen/>
      </body>
    </div>
  );
}

export default App;
