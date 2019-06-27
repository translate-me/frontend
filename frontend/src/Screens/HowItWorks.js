import React, { Component } from 'react';
import { Container, Row, Card, ProgressBar, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFeatherAlt, faGraduationCap} from '@fortawesome/free-solid-svg-icons';
import NavBar from '../Components/NavBar';
import SimpleFooter from '../Components/SimpleFooter';
import { intro, author, translator, new_translation} from './HowItWorksTexts';


class HowItWorks extends Component {
    render(){
        return(
            <div style={styles.page}>
            <NavBar logged={false} />
                <Container>
                    <h1 style={styles.title}>Como funciona?</h1>
                    <p style={styles.text}>{intro}</p>
                    <Row>
                    <FontAwesomeIcon icon={faFeatherAlt} style={styles.icon}/>
                    <h1>Autor</h1>
                    </Row>
                    <h3>O que significa ser um autor em nossa plataforma?</h3>
                    <p style={styles.text}>{author}</p>
                    <h3>Como submeter uma tradução?</h3>
                    <p style={styles.text}>{new_translation}</p>
                    <Row>
                        <FontAwesomeIcon icon={faGraduationCap} style={styles.icon}/>
                    <h1>Tradutor</h1>
                    </Row>
                    <h3>O que significa ser um tradutor em nossa plataforma?</h3>
                    <p style={styles.text}>{translator}</p>
                </Container>
            <SimpleFooter/>
            </div>
        );
    }
}

const styles = {
    page:{
        fontFamily: 'Raleway',
    },
    title: { 
        marginTop: '50px'
    },
    text:{
        textAlign: 'justify'
    },
    icon:{
        fontSize: "30px",
        marginTop: "10px",
        marginLeft: "10px",
        marginRight: "20px" 
    }
}
export default HowItWorks;