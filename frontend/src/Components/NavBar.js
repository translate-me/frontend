import React, { Component } from 'react';
import {Navbar, Nav} from 'react-bootstrap'

class NavBar extends Component {
    render() {
        return (
            <Navbar collapseOnSelect style={{ backgroundColor: "#2B423E" }} variant="dark" expand="lg">
                <Navbar.Brand href="#home" style={{fontFamily:"Nixie One", fontWeight:"bold"}}>translate.me</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#HomepageTradutor" style={{fontFamily: "Raleway"}}>Quero ser um tradutor</Nav.Link>
                        <Nav.Link href="#profile" style={{fontFamily: "Raleway", fontWeight:"bold"}}>PERFIL</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default NavBar;