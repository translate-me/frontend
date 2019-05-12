import React, { Component } from 'react';
import {Navbar, Nav} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faSignOutAlt, faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import {white, green } from '../colors'

class NavBar extends Component {
    logged_icons(){
        return(
            <Nav className="ml-auto">
                <Nav.Link href="#HomepageTradutor" style={{ fontFamily: "Raleway", color: white }}>Espaço do tradutor</Nav.Link>
                <Nav.Link href="#profile">
                    <FontAwesomeIcon icon={faUser} style={{ color: white }} />
                </Nav.Link>
                <Nav.Link>
                    <FontAwesomeIcon icon={faSignOutAlt} style={{ color: white }} />
                </Nav.Link>
            </Nav>
        )
    }
    not_logged_icons(){
        return(
            <Nav className="ml-auto">
                <Nav.Link href="#Como funciona" style={{ fontFamily: "Raleway", color: white }}>Como funciona</Nav.Link>
                <Nav.Link href="#QuemSomosNos" style={{ fontFamily: "Raleway", color: white }}>Quem somos nós</Nav.Link>
                <Nav.Link style={{ fontFamily: "Raleway", color: white }}>
                    <FontAwesomeIcon icon={faSignInAlt} style={{marginLeft:"10px", color: white }} />
                </Nav.Link>
            </Nav>
        )
    }
    explain_pages(){
        return(
        <Nav className="mr-auto">
                <Nav.Link href="#Como funciona" style={{ fontFamily: "Raleway", color: white }}>Como funciona</Nav.Link>
                <Nav.Link href="#QuemSomosNos" style={{ fontFamily: "Raleway", color: white }}>Quem somos nós</Nav.Link>
        </Nav>
        )
    }
    render() {
        return (
            <Navbar collapseOnSelect style={{ backgroundColor: green }} variant="dark" expand="lg">
                <Navbar.Brand href="#home" style={{fontFamily:"Nixie One", fontWeight:"bold", color: white}}>translate.me</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                {/* <Nav className="mr-auto">
                    <Nav.Link href="#Como funciona" style={{ fontFamily: "Raleway", color: white }}>Como funciona</Nav.Link>
                    <Nav.Link href="#QuemSomosNos" style={{ fontFamily: "Raleway", color: white }}>Quem somos nós</Nav.Link>
                </Nav> */}
                {
                    this.props.logged === true?
                        this.logged_icons()
                    :
                        this.not_logged_icons()
                }
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default NavBar;
