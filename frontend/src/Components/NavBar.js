import React, { Component} from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSignOutAlt, faSignInAlt, faGraduationCap, faCoins, faInbox, faFeatherAlt, faInfoCircle, faUsers} from '@fortawesome/free-solid-svg-icons';
import { white, green } from '../colors';

class NavBar extends Component {
  logged_icons(){
      return(
          <Nav className="ml-auto">
            {
              this.props.author?
              this.author_links()
              :
              this.translator_links()
            }
              <Nav.Link href="/profile">
            <FontAwesomeIcon icon={faUser} title={"Perfil"} style={styles.icon} />
              </Nav.Link>
              <Nav.Link href="/">
            <FontAwesomeIcon icon={faSignOutAlt} title={"Sair"} style={styles.icon} />
              </Nav.Link>
          </Nav>
      )
  }
  not_logged_icons(){
      return(
          <Nav className="ml-auto">
          <Nav.Link href= "/how_it_works">
            <FontAwesomeIcon icon={faInfoCircle} style={styles.icon} title={'Como Funciona'} />
          </Nav.Link>
          <Nav.Link href= "/meet_us">
            <FontAwesomeIcon icon={faUsers} style={styles.icon} title={'Quem Somos Nós'} />
          </Nav.Link>
          <Nav.Link href="/login">
            <FontAwesomeIcon icon={faSignInAlt} style={styles.icon} title={'Entrar'} />
          </Nav.Link>
          </Nav>
      )
  }

  author_links(){
    return(
      <Nav>
        <Nav.Link>
          <FontAwesomeIcon icon={faGraduationCap} style={styles.icon} title={'Espaço do Tradutor'}/>
        </Nav.Link>
      </Nav>
    )

  }

  translator_links(){
    return(
    <Nav>
      <Nav.Link style={{ fontFamily: "Raleway", color: white }}>
        <FontAwesomeIcon icon={faFeatherAlt} style={styles.icon} title={'Espaço do Autor'}/>
      </Nav.Link>
      <Nav.Link style={{ fontFamily: "Raleway", color: white }}>
        <FontAwesomeIcon icon={faCoins} style={styles.icon} title={'Carteira'}/>
      </Nav.Link>
      <Nav.Link style={{ fontFamily: "Raleway", color: white }}>
        <FontAwesomeIcon icon={faInbox} style={styles.icon} title={'Trabalhos em Andamento'}/>
      </Nav.Link>
    </Nav>
    );
  }
homepage(){
  var path = ""
  if(this.props.logged){
    if (this.props.author) {
      path = "/homepage_author"
    }else{
      path = "#translator"
    }
  }else{
    path="/"
  }
  return(
    <Navbar.Brand href={path} style={{ fontFamily: 'Nixie One', fontWeight: 'bold', color: white }}>translate.me</Navbar.Brand>
  )

}

  render() {
    return (
      <Navbar collapseOnSelect style={{ backgroundColor: green }} variant="dark" expand="lg">
        {this.homepage()}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
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
const styles={
  icon:{
    marginLeft: "10px", color: white
  }
}

export default NavBar;
