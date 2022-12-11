import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Header from "./Header";
function Register(){

    const [name, updateName] = useState("");
    const [email, updateEmail] = useState(""); 
    const [password, updatePassword] = useState(""); 
    const navigate = useNavigate();

    useEffect(() => { // No entiendo la necesidad de poner useEfecct, por que no solo poner el if y ya?
        if(localStorage.getItem('session')){
            navigate('/add');
        }
    });
    async function ejectRegister(){
        let response = await fetch("http://127.0.0.1:8000/api/register", {
            method: "POST",
            body: JSON.stringify({name, email, password}),
            headers: {
                "Content-Type" : "application/json",
                "Accept" : "application/json"
            }
        });
        response = await response.json();
        localStorage.setItem("session", JSON.stringify(response));
        navigate('/add');
      
    }

    return (
        <>
        <Header />
              <div className="col-sm-6 offset-sm-3">
        <h1>This is Register</h1>

        <input type="text" value={name} onChange={(event) =>updateName(event.target.value)} className="form-control" placeholder="type your name" />
        <br />
        <input type="email" value={email} onChange={(event) =>updateEmail(event.target.value)} className="form-control" placeholder="type your email" />
        <br />
        <input type="password" value={password} onChange={(event) =>updatePassword(event.target.value)} className="form-control" placeholder="type your password" />
        <br />
        <button onClick={ejectRegister} className="btn btn-primary" >Register</button>
      </div>
        </>

    );
  }
  
  export default Register;
  