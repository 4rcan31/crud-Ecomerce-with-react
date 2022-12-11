
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Header from "./Header";

function Login(){
    const navigate = useNavigate(); 
    useEffect(() => { // No entiendo la necesidad de poner useEfecct, por que no solo poner el if y ya?
        if(localStorage.getItem('session')){
            navigate('/');
            return;
        }
    });

    const [email, updateEmail] = useState("");
    const [password, updatePassword] = useState("");

    async function ejectLogin(){
       let response = await fetch("http://127.0.0.1:8000/api/login", {
        method : 'POST',
        body: JSON.stringify({email, password}),
        headers: {
            "Content-Type" : "application/json",
            "Accept" : "application/json"
        }
       });

       response = await response.json();
       if(response.res){
        localStorage.setItem("session", JSON.stringify(response.msg));
        navigate('/add');
       }else{
        alert(response.msg);
       }
    }
    return (
      <div>
        <Header />
        <h1>This is Login</h1>
        <div className="col-sm-6 offset-sm-3">
           <input type ="text" placeholder="Type your email" className="form-control" value={email}  onChange={(event) => updateEmail(event.target.value)} />
           <br />
           <input type ="text" placeholder="Type your password" className="form-control" value = {password} onChange = {(event) => updatePassword(event.target.value)} />
           <br />
           <button className="btn btn-primary" onClick={ejectLogin} >
            Login
           </button>

        </div>
        
      </div>
    );
  }
  
  export default Login;
  