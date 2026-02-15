import { ShoppingCart } from "./components/ShoppingCart";
import { useState } from "react";

import "./App.css";
import { DemoApp } from "./components/DemoApp";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="ex">
        <h1>EX1: </h1>
        <ShoppingCart />
      </div>
      <div className="ex">
        <h1>EX2:</h1>
        <DemoApp />
      </div>
    </>
  );
}

export default App;
