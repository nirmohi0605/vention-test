import React from "react";
import "./App.scss";
import Home from "./components/Home";
import Cart from './components/Cart';
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={Cart} />
      </div>
    </BrowserRouter>
  );
}

export default App;
