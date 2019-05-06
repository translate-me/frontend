import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

class Footer extends Component {
    render() {
        return (
            <div style={{
                display: "flex",
                flexDirection: "row"}}>

                <div style={{margin: "20px", width:"45%"}}>
                    <p style={{fontFamily: "Raleway",fontWeight: "bold",  color:"gray"}}>Direitos Autorais</p>
                    <p style={{ fontFamily: "Raleway", color: "gray", textAlign: "justify" }}>
                        Todos os direitos reservados. Os textos mencionados aqui pertencem unica e exclusivamente
                        aos seus autores, e os tradutores possuem créditos somente pelos serviços de tradução, utilizando
                        obrigatoriamente a marca registrada do translate.me como intermediário.
                    </p>
                    <p style={{ fontFamily: "Raleway", color: "gray" }}>
                        Este site é propriedade da marca translate.me.
                    </p>
                    <p style={{ fontFamily: "Raleway", color: "gray" }}>
                        Lugar de registro: Brasil.
                    </p>
                </div>
                <div style={{margin: "15px", width:"55%"}}>
                    <p style={{ fontFamily: "Raleway", fontWeight: "bold", color: "gray" }}>Sobre o Projeto</p>
                    <p style={{ fontFamily: "Raleway", color: "gray", textAlign: "justify" }}>
                        Projeto desenvolvido na Universidade de Brasília, Campus Gama, pela disciplina Desenho de Software
                    </p>
                    <p style={{ fontFamily: "Raleway", fontWeight: "bold", color: "gray" }}>Contato</p>
                    <p style={{ fontFamily: "Raleway", fontWeight: "bold", color: "gray" }}>
                        <FontAwesomeIcon icon={faEnvelope} style={{ color: "gray", marginRight:"5px" }} />
                        welzrenan@gmail.com
                    </p>
                    <a href="#temosDeUso" style={{ fontFamily: "Raleway", color: "gray", fontWeight: "bold",}}>Termos de Uso</a>
                    <p style={{ fontFamily: "Raleway", color: "gray", textAlign: "justify"  }}>
                        Nossa política de privacidade pode mudar com o tempo. Publicaremos qualquer alteração na política de privacidade nesta página. Nossas práticas de privacidade estão descritas na política de privacidade completa.
                    </p>
                </div>
            </div>
        );
    }
}

export default Footer;
            // <Navbar collapseOnSelect bg="light" expand="lg">
            //     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            //     <Navbar.Collapse id="responsive-navbar-nav">
            //         <Nav className="mr-auto">
            //             <Nav.Link href="#termoDeUso" style={{ fontFamily: "Raleway", color: green, fontSize:"15px" }}>Termos de Uso</Nav.Link>
            //             <Nav.Link href="#copyright" style={{ fontFamily: "Raleway", color: green, fontSize: "15px" }}>Direitos Autorais</Nav.Link>                        
            //         </Nav>
            //     </Navbar.Collapse>
            // </Navbar>
