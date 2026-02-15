import { ShoppingCart } from "./components/ShoppingCart";
import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>EX1: </h1>
      <ShoppingCart />
    </>
  );
}

export default App;
