import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Auth/Login.jsx";
import SignUp from "./components/Auth/SignUp.jsx";
import Home from "./components/Auth/Home.jsx";
import AddProduct from "./components/Products/AddProduct.jsx";
import EditProduct from "./components/Products/EditProduct.jsx";
import ViewProduct from "./components/Products/ViewProduct.jsx";

function App() {
  return (
    <div className="App ">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/product" element={<Home />} />
          <Route path="/product/add" element={<AddProduct />} />
          <Route path="/product/edit" element={<EditProduct />} />
          <Route path="/product/view" element={<ViewProduct />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
