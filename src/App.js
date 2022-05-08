import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./pages/shared/Header/Header";
import Footer from "./pages/shared/Footer/Footer";
import Home from "./pages/Home/Home/Home";
import InventoryDetail from "./pages/Home/InventoryDetail/InventoryDetail";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Manage from "./pages/Home/Manage/Manage";
import AddItem from "./pages/Home/AddItem/AddItem";
import Login from "./pages/Home/Login/Login";
import Register from "./pages/Home/Register/Register";

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
        <Route path="/manage" element={<Manage></Manage>}></Route>
        <Route path="/addItem" element={<AddItem></AddItem>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
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
