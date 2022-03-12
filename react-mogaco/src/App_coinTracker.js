
import {useState, useEffect} from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(()=>{
    fetch("coinpaprika api").then(response=>response.json()
    ).then(json=>{
      setCoins(json);
      setLoading(false);
    });
  }, []);
  return (
    <div className="App">
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1> {/*({loading ? "" : coins.length})*/}
      {loading?<strong>Loading...</strong>:<select>
        {coins.map((coin) => <option>{coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD</option>)}
      </select>}
    </div>
  );
}

// export default App;

// code challenge: coin의 목록을 select로 선택하게 해서 USD가 얼마의 비트코인으로 환산되는지를 알려주는 웹페이지 제작해보기
