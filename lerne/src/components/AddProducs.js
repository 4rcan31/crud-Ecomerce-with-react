import { useState } from "react";
import Header from "./Header";

function AddProduct(){
    const [name, UpdateProduct] = useState('');
    const [description, updateDescription] = useState('');
    const [price, updatePrice] = useState('');
    const [file, updateFile] = useState('');


    async function ejectAddProduct(){
        const formData = new FormData();
        formData.append('name', name);
        formData.append('file', file);
        formData.append('description', description);
        formData.append('price', price);
        let response = await fetch("http://127.0.0.1:8000/api/addproduct", {
            method: "POST",
            body: formData,
            headers:{
            }
           });
            response = await response.json();
            alert(response.msg);
    }


    return (
        <div>
            <Header></Header>
            <h1>This is the page add product</h1>
            <div className="col-sm-6 offset-sm-3">
            <input type ="text" placeholder="Type your name product" className="form-control" value={name}  onChange={(event) => UpdateProduct(event.target.value)} />
            <br />
            <input type ="text" placeholder="Type your description product" className="form-control" value = {description} onChange = {(event) => updateDescription(event.target.value)} />
            <br />
            <input type ="text" placeholder="Type your price product" className="form-control" value = {price} onChange = {(event) => updatePrice(event.target.value)} />
            <br />
            <input type ="file" placeholder="Type your price product" className="form-control"  onChange = {(event) => updateFile(event.target.files[0])} />
            <br />
            <button className="btn btn-primary" onClick={ejectAddProduct} >
                add
            </button>

            </div>
        </div>
    );
}

export default AddProduct;
