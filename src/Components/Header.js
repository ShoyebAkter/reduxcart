import React, { Component } from 'react';
import  Nav from 'react-bootstrap/Nav'
import  Navbar from 'react-bootstrap/Navbar'
import  Container from 'react-bootstrap/Container'

class Header extends Component {
    render() {
        return (
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">Add To Cart</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                        </Nav>
                        <i class="fa-solid fa-cart-shopping text-white" style={{fontSize:25,cursor:"pointer"}}></i>
                    </Container>
                </Navbar>
            
        );
    }
}

export default Header;