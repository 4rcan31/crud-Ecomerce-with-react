import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "./Header";

function Products() {
  const [data, updateData] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/products")
      .then((response) => response.json())
      .then((products) => {
        updateData(products);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="App">
        <h1>Cargando...</h1>
      </div>
    );
  }

  async function deleteProduct(id) {
    let response = await fetch(`http://127.0.0.1:8000/api/delete/${id}`, {
      method: "DELETE",
    });
    response = await response.json();
    alert(response.msg);
  }

  return (
    <div>
      <Header />
      <h1>This is Products</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Image</th>

            {localStorage.getItem("session") ? (
              <>
                <th>Delete</th>
                <th>Update</th>
              </>
            ) : null}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.description}</td>
              <td>
                <img
                  style={{ width: 100 }}
                  src={"http://localhost:8000/products/" + item.path_img}
                  alt=""
                />
              </td>
              {localStorage.getItem("session") ? (
                <>
                  <td>
                    <span
                      onClick={() => {
                        deleteProduct(item.id);
                      }}
                      className="delete"
                    >
                      Delete
                    </span>
                  </td>
                  <td>
                    <Link to={`/update/${item.id}`}>
                      <span className="update">Update</span>
                    </Link>
                  </td>
                </>
              ) : null}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Products;
