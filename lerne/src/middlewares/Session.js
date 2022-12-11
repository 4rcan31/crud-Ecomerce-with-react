import { useEffect } from "react";
import { useNavigate } from "react-router";

function Session(props){
    const navigate = useNavigate();

    useEffect(() => { // No entiendo la necesidad de poner useEfecct, por que no solo poner el if y ya?
        if(!localStorage.getItem('session')){
            navigate('/register');
            return;
        }
    });

   return(
    <>
        <props.componet />
    </>
   );
}


export default Session;