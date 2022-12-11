//import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes} from "react-router-dom";
//import {Navigate} from "react-router-dom";
//Componetes
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import AddProduct from './components/AddProducs';
import UpdateProducts from './components/UpdateProducts';
import Session from './middlewares/Session';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
    


      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/login" element={ <Login/> } />
        <Route path="/register" element={ <Register/> } />
        <Route path="/add" element={ <Session componet = {AddProduct} session = {true}/>} />
        <Route path="/update" element={ <Session componet = {UpdateProducts} session = {true} />} />
      </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
