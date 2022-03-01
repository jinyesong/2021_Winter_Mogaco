
import {useState, useEffect} from "react";

function App() {
  const [counter, setCount] = useState(0);
  const [keyword, setKeyword] = useState("");

  console.log("계속실행");
  const runOnlyOnce = ()=>{
    console.log("한번실행");
  }

  useEffect(runOnlyOnce, []); //맨 처음 한번만 실행

  useEffect(()=>{ 
    if(keyword !== ""){
      console.log("search for", keyword);
    }
  }, [keyword]); //keyword의 변화가 있을 때만 실행

  const onClick = ()=>{
    setCount(current => current +1);
  }

  const onChange = (event)=>{
    setKeyword(event.target.value);
  }

  return (
    <div className="App">
      <input onChange={onChange} type="text" placeholder="Search here" />
      <h1>{counter}</h1>
      <button onClick={onClick}>counter</button>
    </div>
  );
}

export default App;
