import React from "react";
import './App.css';
import Search from './components/search.js';
import Logo from './components/logo.js';
import Upcoming from "./components/upcoming";

function App() {
  return (
    <div className="App">
      <div className="head">
      <Logo></Logo>
      <h1>TCE EVENTS</h1>
      <Search></Search>
      <button>Search</button>
      <a id='reg' href="./"><b>Register</b></a>
      <a id='sig' href='./'><b>Sign In</b></a>
      </div>
      <Upcoming></Upcoming>
    </div>
  );
}

export default App;
