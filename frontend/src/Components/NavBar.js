import React, { Component } from 'react';
import {Navbar, Nav} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import {white, green } from '../colors'

class NavBar extends Component {
    render() {
        return (
            <Navbar collapseOnSelect style={{ backgroundColor: green }} variant="dark" expand="lg">
                <Navbar.Brand href="#home" style={{fontFamily:"Nixie One", fontWeight:"bold", color: white}}>translate.me</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#HomepageTradutor" style={{fontFamily: "Raleway", color: white}}>Espaço do tradutor</Nav.Link>
                        <Nav.Link href="#profile">
                            <FontAwesomeIcon icon={faUser} style={{color: white}}/>
                        </Nav.Link>
                        <Nav.Link>
                            <FontAwesomeIcon icon={faSignOutAlt} style={{ color: white }}/>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default NavBar;
