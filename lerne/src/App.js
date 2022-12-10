//import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes} from "react-router-dom";
//import {Navigate} from "react-router-dom";
//Componetes
import Header from "./components/Header";
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import AddProduct from './components/AddProducs';
import UpdateProducts from './components/UpdateProducts';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />


      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/login" element={ <Login/> } />
        <Route path="/register" element={ <Register/> } />
        <Route path="/add" element={ <AddProduct/> } />
        <Route path="/update" element={ <UpdateProducts/> } />
      </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
