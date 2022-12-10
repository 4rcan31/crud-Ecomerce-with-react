import React from 'react'
import {Navbar, Nav, Container} from "react-bootstrap";
import {Link} from "react-router-dom";
//import { Routes, Route } from "react-router-dom"
function Header(){
    return (
        <>
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="#home">Navbar</Navbar.Brand>
              <Nav className="me-auto">
                <Link className='separator' to="/">Home</Link>
                <Link className='separator' to="Add">Add</Link>
                <Link className='separator' to="Update">Update</Link>
                <Link className='separator' to="Login">Login</Link>
                <Link className='separator' to="Register">Register</Link>
              </Nav>
            </Container>
          </Navbar>
        </>
      );
}

export default Header;