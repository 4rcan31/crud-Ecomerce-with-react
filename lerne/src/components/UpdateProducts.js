import Header from "./Header";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";

function UpdateProducts(){
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);


    const [name, UpdateProduct] = useState('');
    const [description, updateDescription] = useState('');
    const [price, updatePrice] = useState('');
   
 
    

    useEffect(() => {
        async function api(){
            let response = await fetch(`http://127.0.0.1:8000/api/product/${id}`, {
                method: "GET",
               });
                response = await response.json();
                UpdateProduct(response.msg.name);
                updateDescription(response.msg.description);
                updatePrice(response.msg.price);
                setIsLoading(false);
               // console.log(response);
        }
  
        api();
      }, [id]);

     


      if (isLoading) {
        return (
          <div className="App">
            <h1>Cargando...</h1>
          </div>
        );
      }

      async function ejectUpdateProduct(){
        const formData = new FormData();
        formData.append('name', name);
        formData.append('description', description);
        formData.append('price', price);
        formData.append('id', id);
        let response = await fetch("http://127.0.0.1:8000/api/updateproduct", {
            method: "POST",
            body: formData,
            headers:{
            }
           });
            response = await response.json();
            alert(response.msg);
      }
      
     // const [description, updateDescription] = useState(data.ms)

    return (
      <div>
        <Header />
        <h1>This is UpdateProducts</h1>
        <div className="col-sm-6 offset-sm-3">

        <div className="col-sm-6 offset-sm-3">
            <label>Edit the name</label>
            <input type ="text" placeholder="Type your name product" className="form-control" value={name}  onChange={(event) => UpdateProduct(event.target.value)} />
            <br />
            <label>Edit the description</label>
            <input type ="text" placeholder="Type your description product" className="form-control" value = {description} onChange = {(event) => updateDescription(event.target.value)} />
            <br />
            <label>Edit the price</label>
            <input type ="text" placeholder="Type your price product" className="form-control" value = {price} onChange = {(event) => updatePrice(event.target.value)} />
            <br />
            <button className="btn btn-primary" onClick={ejectUpdateProduct} >
                add
            </button>
        </div>
      </div>
      </div>
    );
  }
  
  export default (UpdateProducts);
  