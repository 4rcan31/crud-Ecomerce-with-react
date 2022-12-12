import {Route, Routes} from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";
import Products from "../components/Products";
import Register from "../components/Register";
import AddProduct from "../components/AddProducs";
import UpdateProducts from "../components/UpdateProducts";
import Session from "../middlewares/Session";


//NOTA: No puedo configurar esto, la idea era hacer un componete de todos esto y mandarlo a llamar a App.js

function RoutesApp(){
    <Routes>
    <Route path="/" element={ <Home/> } />
    <Route path="/products" element={ <Products/> } />
    <Route path="/login" element={ <Login/> } />
    <Route path="/register" element={ <Register/> } />
    <Route path="/add" element={ <Session componet = {AddProduct} session = {true}/>} />
    <Route path="/update/:id" element={ <Session componet = {UpdateProducts} session = {true} />} />
    <Route path="*" element={<div>404</div> } />
  </Routes>
}

export default RoutesApp;