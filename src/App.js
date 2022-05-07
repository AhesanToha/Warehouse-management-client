import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./pages/shared/Header/Header";
import Footer from "./pages/shared/Footer/Footer";
import Home from "./pages/Home/Home/Home";
import InventoryDetail from "./pages/Home/InventoryDetail/InventoryDetail";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route
          path="/inventoryDetail/:detailId"
          element={<InventoryDetail></InventoryDetail>}
        ></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default App;
