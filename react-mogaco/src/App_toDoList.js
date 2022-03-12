
import {useState, useEffect} from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event)=>{
    setToDo(event.target.value);
  }
  const onSubmit = (event)=>{
    event.preventDefault(); //?
    if(toDo === ""){
      return;
    }
    setToDo("");
    setToDos(current => [toDo, ...current]); //...arr : 배열의 요소들을 반환
  }
  console.log(toDos);
  return (
    <div className="App">
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} type="text" placeholder="Write your to do..." />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((toDo, index)=><li key={index}>{toDo}</li>)}
      </ul>
    </div>
  );
}

// export default App;
