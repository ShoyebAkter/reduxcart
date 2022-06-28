import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Badge from '@mui/material/Badge';
import Container from 'react-bootstrap/Container'
import { NavLink } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Container>
                    <NavLink to='/' className="text-decoration-none text-white">Add To Cart</NavLink>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                    </Nav>
                    <Badge badgeContent={4} color="primary">
                    <i class="fa-solid fa-cart-shopping text-white" style={{ fontSize: 25, cursor: "pointer" }}></i>
                    </Badge>
                </Container>
            </Navbar>

        );
    }
}

export default Header;