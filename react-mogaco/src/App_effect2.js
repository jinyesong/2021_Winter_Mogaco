
import {useState, useEffect} from "react";

function Hello(){
  useEffect(()=>{
    console.log("I'm created");
    return ()=> console.log("destroyed"); //컴포넌트가 destroyed될 때도 함수 설정 가능, useEffect의 return
  }, []);
  return(
    <h1>Hello</h1>
  );
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = ()=>{
    setShowing(current => !current);
  }
  return (
    <div className="App">
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

// export default App;
