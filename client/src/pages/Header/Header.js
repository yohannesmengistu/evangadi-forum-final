import React from 'react'
import "./Header.css"
import {Nav,Container,Navbar} from 'react-bootstrap'

function Header() {
  return (
   <Navbar expand="lg" fixed="top" className="bg-body-tertiary nav">
      <Container>
        <Navbar.Brand href="#home"><img src="https://www.evangadi.com/themes/humans//assets/images/misc/evangadi-logo-home.png"/></Navbar.Brand>
        <Navbar.Toggle className='tog' aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="link" href="#home">Home</Nav.Link>
            <Nav.Link className="link" href="#How it works">How it works</Nav.Link>
            <Nav><button className='btn btn-success'>SIGN IN</button> </Nav>          
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

)
}


export default Header
