import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
//import { Routes, Route } from "react-router-dom"
function Header() {
    const navigate = useNavigate();
    let v = false;
    let userInfo = "undefained";
    if(localStorage.getItem("session")){
        v = true;
        userInfo = JSON.parse(localStorage.getItem('session'));
    }

    function logOut(){
        localStorage.removeItem('session');
        navigate('/');
    }
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Link className="separator" to="/">
              Home
            </Link>
            <Link className="separator" to="/products">
              Products
            </Link>
            {v ? (
              <>
                <Link className="separator" to="/Add">
                  Add
                </Link>
              </>
            ) : (
              <>
                <Link className="separator" to="/Login">
                  Login
                </Link>
                <Link className="separator" to="/Register">
                  Register
                </Link>
              </>
            )}
          </Nav>
          <Nav>
            {v ? (
              <>
                <NavDropdown title={userInfo.name}>
                  <NavDropdown.Item>Profile</NavDropdown.Item>
                  <NavDropdown.Item onClick={logOut}>Logout</NavDropdown.Item>
                </NavDropdown>
              </>
            ) : (
              <></>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
