import React, {Component} from 'react';
import { Form , Row, Image, Col, Button } from 'react-bootstrap';
import NavBar from '../Components/NavBar';
import SimpleFooter from '../Components/SimpleFooter';
import Timeline from '../Util/timeline.png';
import { white, green } from '../colors';


class SubmitTextInformation extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    complexityLevel(){
        return (
            <Form.Group>
                <Form.Label>Nível de Complexidade</Form.Label>
                <Form.Control as="select">
                    <option selected disabled>Escolha uma opção</option>
                    <option>Baixo</option>
                    <option>Médio</option>
                    <option>Alto</option>
                </Form.Control>
            </Form.Group>
        );
    }

    knowledgeArea() {
        return (
            <Form.Group>
                <Form.Label>Área de Conhecimento</Form.Label>
                <Form.Control as="select">
                    <option selected disabled>Escolha uma opção</option>
                    <option>Ciências Humanas</option>
                    <option>Ciências Exatas</option>
                    <option>Ciências da Natureza</option>
                    <option>Outros</option>
                </Form.Control>
          </Form.Group>
        );
    }

    textTitle() {
        return (
          <Form.Group>
            <Form.Label>Título</Form.Label>
            <Form.Control as="text"/>
          </Form.Group>
        );
    }

    textContext(){
        return (
            <Form.Group>
                <Form.Label>Contexto</Form.Label>
                <Form.Control as="textarea" rows="8" />
            </Form.Group>
        );
    }


    render() {
        return (
          <div>
            <NavBar logged={true} />
            <div style={styles.screen}>
            <Row style={styles.row}>
                <Col>
                <p style={styles.title}>Preencha as Seguintes Informações Sobre Seu Texto</p>
                </Col>
                <Col>
                    <div style={styles.buttondiv}>
                        <Button onClick={this.logState} style={styles.button}>
                            Enviar
                        </Button>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col style={styles.col}>
                    <Form style={styles.font}>
                        {this.textTitle()}
                        {this.complexityLevel()}
                        {this.knowledgeArea()}
                    </Form>
                </Col>
                <Col style={styles.col}>
                    <Form style={styles.font}>
                        {this.textContext()}
                    </Form>
                </Col>
            </Row>
            </div>
          </div>
        );
      }

}
const styles = {
    screen: {
        margin: '5%'
    },
    title:{
        fontFamily: 'Raleway', fontSize: '30px'
    },
    col:{
        marginLeft: "5%", marginRight: "5%", marginBottom: "5%", marginTop:"2%"
    },
    font:{
        fontFamily: 'Raleway'
    },
    buttondiv: {
        textAlign: 'right',
        position: 'relative',
        marginRight: '10%'
    },
    button: {
        fontFamily: 'Raleway',
        backgroundColor: green,
        borderColor: green,
    },
};

export default SubmitTextInformation; 