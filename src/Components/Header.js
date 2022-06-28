import React, { Component,useState } from 'react';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Badge from '@mui/material/Badge';
import Container from 'react-bootstrap/Container'
import { NavLink } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import "./style.css"

const Header = () => {
    const [anchorEl, setAnchorEl] = useState (null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Navbar bg="dark" variant="dark" style={{ height: 60 }}>
            <Container>
                <NavLink to='/' className="text-decoration-none text-white">Add To Cart</NavLink>
                <Nav className="me-auto">
                    <NavLink to="#home" className="text-decoration-none text-white px-5">Home</NavLink>
                </Nav>
                <Badge badgeContent={4} color="primary"
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    <i class="fa-solid fa-cart-shopping text-white" style={{ fontSize: 25, cursor: "pointer" }}></i>
                </Badge>
            </Container>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <div className='card_details'>
                    <i className='fas fa-close smallclose'
                    onClick={handleClose}
                    style={{position:"absolute",top:2,right:20,fontSize:23,cursor:"pointer"}}
                    ></i>
                    <p style={{fontSize:22}}>Add something in your cart</p>
                </div>
            </Menu>
        </Navbar>

    );
}

export default Header;