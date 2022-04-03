import{
  BrowserRouter as Router,
  Routes,
  Route,
//Link: 브라우저 새로고침 없이 다른 페이지로 이동시켜주는 컴포넌트
} from "react-router-dom";
import Home from "./route/Home";
import Detail from "./route/Detail";

function App() {
  return (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:id" element={<Detail />} />
    </Routes>
  </Router>);
}

export default App;
