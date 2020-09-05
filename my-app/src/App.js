import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./Teste";
import Teste from "./Teste";

function App() {
  const [cont, setCont] = useState(0);

  const addCont = () => {
    return setCont(cont);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>Cliquei {cont} vezes.</p>
        <button onClick={addCont}>+1</button>
      </header>
      <Teste />
    </div>
  );
}

export default App;
