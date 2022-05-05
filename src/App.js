import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./pages/shared/Header/Header";
import Home from "./pages/Home/Home";
import Loading from "./pages/shared/Loading/Loading";
import Footer from "./pages/shared/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/loding" element={<Loading></Loading>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
