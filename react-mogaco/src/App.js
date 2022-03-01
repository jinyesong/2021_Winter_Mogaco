import Button from "./Button";
import styles from "./App.module.css";
import {useState, useEffect} from "react";

function App() {
  const [counter, setCount] = useState(0);
  console.log("계속실행");
  const runOnlyOnce = ()=>{
    console.log("한번실행");
  }
  useEffect(runOnlyOnce, []);
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
