import React from 'react';
import { Navbar, Nav} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.scss';

import {Link} from "react-router-dom";
const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">Portfolio App</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link as={Link} to='/'>Home</Nav.Link>
                <Nav.Link as={Link} to='/clicker'>Clicker</Nav.Link>
                <Nav.Link as={Link} to='/emoji'>Emoji</Nav.Link>
                <Nav.Link as={Link} to='/posts'>Posts</Nav.Link>
                <Nav.Link as={Link} to='/weather'>Weather</Nav.Link>
            </Nav>
        </Navbar>
    )
}
export default NavBar;