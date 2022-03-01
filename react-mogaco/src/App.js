import Button from "./Button";
import styles from "./App.module.css";
import {useState} from "react";

function App() {
  const [counter, setCount] = useState(0);
  const onClick = ()=>{
    setCount(current => current +1);
  }
  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={onClick}>counter</button>
    </div>
  );
}

export default App;
