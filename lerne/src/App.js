//import logo from './logo.svg';
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Products from "./components/Products";
import Register from "./components/Register";
import AddProduct from "./components/AddProducs";
import UpdateProducts from "./components/UpdateProducts";
import Session from "./middlewares/Session";
//import {Navigate} from "react-router-dom";
//Componetes

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/add"
            element={<Session componet={AddProduct} session={true} />}
          />
          <Route
            path="/update/:id"
            element={<Session componet={UpdateProducts} session={true} />}
          />
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
