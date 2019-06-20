import React, {Component} from 'react';
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
        } if (complexityLevel !== "Escolha uma opção") {
            this.setState({ complexityLevelNotOk: false });
        } else {
            this.setState({ complexityLevelNotOk: true });
            isOk = false;
        } if (knowledgeArea !== '') {
            this.setState({ knowledgeAreaNotOk: false });
        } else {
            this.setState({ knowledgeAreaNotOk: true });
            isOk = false;
        } if (originLanguage !== "Escolha uma opção") {
            this.setState({ originLanguageNotOk: false });
        } else {
            this.setState({ originLanguageNotOk: true });
            isOk = false;
        } if (translateLanguage !== "Escolha uma opção") {
            this.setState({ translateLanguageNotOk: false });
        } else {
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

    complexityLevel(){
        const { complexityLevelNotOk } = this.state;
        
        return (
            <Form.Group>
                <Form.Label>Nível de Complexidade</Form.Label>
                <Form.Control 
                as="select"
                onChange={() => { this.setState({ complexityLevel: this.complexityLevelRef.value }); }}
                ref={(ref) => { this.complexityLevelRef = ref; }}
                isInvalid={complexityLevelNotOk}>
                    <option defaultValue disabled>Escolha uma opção</option>
                    <option>Baixo</option>
                    <option>Médio</option>
                    <option>Alto</option>
                </Form.Control>
                <Form.Control.Feedback type="invalid">Nome inválido</Form.Control.Feedback>
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
                    options={options} 
                    isInvalid={knowledgeAreaNotOk}/>
                <Form.Feedback type="invalid">Nome inválido</Form.Feedback>
          </Form.Group>
        );
    }

    originLanguage() {
        const { originLanguageNotOk } = this.state
        
        return (
            <Form.Group>
                <Form.Label>Língua Original</Form.Label>
                <Form.Control 
                as="select"
                onChange={() => { this.setState({ originLanguage: this.originLanguageRef.value }); }}
                ref={(ref) => { this.originLanguageRef = ref; }}
                isInvalid={originLanguageNotOk}>
                    <option defaultValue disabled>Escolha uma opção</option>
                    <option>Português</option>
                    <option>Espanhol</option>
                    <option>Inglês</option>
                </Form.Control>
                <Form.Control.Feedback type="invalid">Nome inválido</Form.Control.Feedback>
          </Form.Group>
        );
    }

    translateLanguage() {
        const { translateLanguageNotOk } = this.state
        
        return (
            <Form.Group>
                <Form.Label>Língua de Tradução</Form.Label>
                <Form.Control 
                as="select"
                onChange={() => { this.setState({ translateLanguage: this.translateLanguageRef.value }); }}
                ref={(ref) => { this.translateLanguageRef = ref; }}
                isInvalid={translateLanguageNotOk}>
                    <option defaultValue disabled>Escolha uma opção</option>
                    <option>Português</option>
                    <option>Espanhol</option>
                    <option>Inglês</option>
                </Form.Control>
                <Form.Control.Feedback type="invalid">Nome inválido</Form.Control.Feedback>
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
};

export default SubmitTextInformation; 