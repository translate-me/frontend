import React, {Component} from 'react';
import Link from 'react-router-dom'
import { Form, Row, Col, Button } from 'react-bootstrap';
import NavBar from '../Components/NavBar';
import { white, green } from '../colors';
import Select from 'react-select';


class SubmitTextInformation extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            complexityLevel: '',
            knowledgeArea: '',
            textContext: '',
            originLanguage: '',
            translateLanguage: '',
            titleNotOk: null,
            complexityLevelNotOk: null,
            knowledgeAreaNotOk: null,
            textContextNotOk: null,
            originLanguageNotOk: null,
            translateLanguageNotOk: null,
            titleRef: React.createRef(),
            complexityLevelRef: React.createRef(),
            knowledgeAreaRef: React.createRef(),
            textContextRef: React.createRef(),
            originLanguageRef: React.createRef(),
            translateLanguageRef: React.createRef(),
            alert: {
                variant: '',
                headding: '',
                text: '',
                show: false,
            },
        };
    }

    verifyFields() {
        let isOk = true;
        const {
            title,
            complexityLevel,
            knowledgeArea,
            textContext,
            originLanguage,
            translateLanguage,
        } = this.state;
    
        if (title !== '') {
            this.setState({ titleNotOk: false });
        } else {
            this.setState({ titleNotOk: true });
            isOk = false;
        } if (textContext !== '' && textContext.length > 20) {
            this.setState({ textContextNotOk: false });
        } else {
            this.setState({ textContextNotOk: true });
            isOk = false;
        } if (complexityLevel !== '') {
            this.setState({ complexityLevelNotOk: false });
            document.getElementById('error0').style.display = "none";
        } else {
            document.getElementById('error0').style.display = "block";            
            this.setState({ complexityLevelNotOk: true });
            isOk = false;
        } if (knowledgeArea !== '') {
            this.setState({ knowledgeAreaNotOk: false });
            document.getElementById('error1').style.display = "none";
        } else {
            document.getElementById('error1').style.display = "block";
            this.setState({ knowledgeAreaNotOk: true });
            isOk = false;
        } if (originLanguage !== '') {
            this.setState({ originLanguageNotOk: false });
            document.getElementById('error2').style.display = "none";
        } else {
            document.getElementById('error2').style.display = "block";
            this.setState({ originLanguageNotOk: true });
            isOk = false;
        } if (translateLanguage !== '') {
            this.setState({ translateLanguageNotOk: false });
            document.getElementById('error3').style.display = "none";
        } else {
            document.getElementById('error3').style.display = "block";            
            this.setState({ translateLanguageNotOk: true });
            isOk = false;
        }
        
        return isOk;
    }
    
    async send() {
        if (this.verifyFields()) {
            console.log('td certo');
        }

        else {
            console.log('coisa errada produção');
        }
      }
    
      formGroup(label, placeholder, onChange, thisref, invalid, warning) {
        return (
          <Form.Group>
            <Form.Label style={styles.form_text}>{label}</Form.Label>
            <Form.Control
              style={styles.form_text}
              placeholder={placeholder}
              type="string"
              onChange={onChange}
              ref={(ref) => { thisref = ref; }}
              isInvalid={invalid}
            />
            <Form.Control.Feedback type="invalid">{warning}</Form.Control.Feedback>
          </Form.Group>
        );
      }

    complexityLevel() {
        const { complexityLevelNotOk } = this.state;
        const options = [
            { value: '1', label: 'Baixo' },
            { value: '2', label: 'Médio' },
            { value: '3', label: 'Alto' }
        ]

        return (
            <Form.Group>
                <Form.Label>Nível de Complexidade</Form.Label>
                    <Select
                    onChange={() => { this.setState({ complexityLevel: this.complexityLevelRef.value }); }}
                    ref={(ref) => { this.complexityLevelRef = ref; }} 
                    placeholder='Escolha uma opção' 
                    options={options} />
                    <div id="error0" style={styles.error_message}>Escolha o nível de complexidade</div>
            </Form.Group>
        );
    }

    knowledgeArea() {
        const { knowledgeAreaNotOk } = this.state;
        const options = [
            { value: '1', label: 'Ciências Humanas' },
            { value: '2', label: 'Ciências Exatas' },
            { value: '3', label: 'Ciências da Natureza' },
            { value: '4', label: 'Outros' }
        ]

        return (
            <Form.Group>
                <Form.Label>Área de Conhecimento</Form.Label>
                    <Select
                    onChange={() => { this.setState({ knowledgeArea: this.knowledgeAreaRef.value }); }}
                    ref={(ref) => { this.knowledgeAreaRef = ref; }} 
                    placeholder='Escolha uma opção' 
                    options={options} />
                    <div id="error1" style={styles.error_message}>Escolha a área de conhecimento</div>
          </Form.Group>
        );
    }

    originLanguage() {
        const { originLanguageNotOk } = this.state
        const options = [
            { value: '1', label: 'Português' },
            { value: '2', label: 'Espanhol' },
            { value: '3', label: 'Inglês' }
        ]

        return (
            <Form.Group>
                <Form.Label>Língua de Origem</Form.Label>
                    <Select
                    onChange={() => { this.setState({ originLanguage: this.originLanguageRef.value }); }}
                    ref={(ref) => { this.originLanguageRef = ref; }} 
                    placeholder='Escolha uma opção' 
                    options={options} />
                    <div id="error2" style={styles.error_message}>Escolha a língua de origem</div>
          </Form.Group>
        );
    }

    translateLanguage() {
        const { translateLanguageNotOk } = this.state
        const options = [
            { value: '1', label: 'Português' },
            { value: '2', label: 'Espanhol' },
            { value: '3', label: 'Inglês' }
        ]

        return (
            <Form.Group>
                <Form.Label>Língua de Tradução</Form.Label>
                    <Select
                    onChange={() => { this.setState({ translateLanguage: this.translateLanguageRef.value }); }}
                    ref={(ref) => { this.translateLanguageRef = ref; }} 
                    placeholder='Escolha uma opção' 
                    options={options} />
                    <div id="error3" style={styles.error_message}>Escolha a língua de tradução</div>
          </Form.Group>
        );
    }
    textTitle() {
        const { titleNotOk } = this.state;
        
        return (
          <Form.Group>
            <Form.Label>Título</Form.Label>
            <Form.Control
            placeholder="Ex.: Constitution of the United States"
            type="string"
            onChange={() => { this.setState({ title: this.titleRef.value }); }}
            ref={(ref) => { this.titleRef = ref; }}
            isInvalid={titleNotOk}/>
            <Form.Control.Feedback type="invalid">Preencha o título</Form.Control.Feedback>
          </Form.Group>
        );
    }

    textContext(){
        const { textContextNotOk } = this.state;
        
        return (
            <Form.Group>
                <Form.Label>Contexto</Form.Label>
                <Form.Control 
                as="textarea" 
                rows="8" 
                placeholder="Ex.: The Constitution of the United States is the supreme law of the United States of America. 
                The Constitution, originally comprising seven articles, delineates the national frame of government."
                type="text-area"
                onChange={() => { this.setState({ textContext: this.textContextRef.value }); }}
                ref={(ref) => { this.textContextRef = ref; }}
                isInvalid={textContextNotOk}/>
                <Form.Control.Feedback type="invalid">Forneça um contexto maior sobre o texto.</Form.Control.Feedback>
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
                        <Button style={styles.button} onClick={() => { this.send(); }}>   
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
                        {this.originLanguage()}
                    </Form>
                </Col>
                <Col style={styles.col}>
                    <Form style={styles.font}>
                        {this.textContext()}
                        {this.translateLanguage()}
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
    form_text: {
        fontFamily: 'Raleway',
    },
    error_message: {
        display: 'None',
        width: '100%',
        marginTop: '.25rem',
        fontSize: '80%',
        color: '#dc3545'
    },
    error_select: {
        border: '1px solid red'
    }
};

export default SubmitTextInformation; 