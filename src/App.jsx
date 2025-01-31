import "./App.css";
import { useState } from "react";
import Accordion from "./components/accordion";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* Accordion Component */}
      <Accordion />
    </div>
  );
}

export default App;
