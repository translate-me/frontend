import React, { Component } from 'react';
import {Form, Button, Alert} from 'react-bootstrap';
import { green, lightgreen } from '../colors'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer';
import axios from 'axios';
import { FilePond } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import SimpleFooter from '../Components/SimpleFooter';

class TranslatorSignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term : "",
            cpf: "",
            level:"",
            certified:"",
            language: "",
            level_not_ok : null,
            language_not_ok: null,
            cpfref : React.createRef(),
            levelref : React.createRef(),
            certifiedref : React.createRef(),
            languageref : React.createRef(),
            alert:{
                variant: "",
                headding: "",
                text: "",
                show:false
            }
        }
    }

    register() {
        let path = `#homepage_author`;
        this.props.history.push(path);
    }

    async send(){
        console.log("send")
    }
    button_div(){
        return(
            <div style={styles.two_columns}>
                <Button variant="primary" style={styles.button} onClick={()=>{ this.send()}} >
                    Cadastrar
                </Button>
                <div style={styles.link_div}>
                    <a style={styles.link} href="/">Já tenho cadastro</a>
                </div>
            </div>
        )
    }

    handle_cpf(){
        const cpf_regex = /\d+/g;
        var value = this.state.cpfref.value.match(cpf_regex)
        if (value !=null ){
            this.setState({ cpf: value })
        } else if (this.state.cpfref.value == ""){
            this.setState({cpf: ""})
        }
    }
    cpf_group(){
        return(
            <Form.Group>
                <Form.Label style={styles.form_text}>CPF</Form.Label>
                <Form.Control style={styles.form_text} value={this.state.cpf}
                    onChange={() => { this.handle_cpf()}} maxLength = "11"
                    ref={ref => { this.state.cpfref = ref; }}/>
            </Form.Group>
        )
    }
    level_group(){
        return(
            <Form.Group>
                  <Form.Label style={styles.form_text}> Nível </Form.Label>
                  <Form.Control as="select">
                    <option>Básico</option>
                    <option>Intermediário</option>
                    <option>Avançado</option>
                  </Form.Control>
            </Form.Group>
        )
    }
    language_group(){
        return(
            <div>
            <Form.Group>
                  <Form.Label style={styles.form_text}> Línguas </Form.Label>
                  <Form.Control as="select">
                    <option>Português brasileiro</option>
                    <option>Português</option>
                    <option>Espanhol</option>
                    <option>Alemão</option>
                    <option>Inglês</option>
                    <option>Francês</option>
                    <option>Italiano</option>
                    <option>Japonês</option>
                    <option>Árabe</option>
                  </Form.Control>
            </Form.Group>
                    <Form.Label style={styles.form_text}>Certificado em língua estrangeira </Form.Label>
            </div>
        )
    }
    text(){
        return(
            <div style={styles.half}>
                <h1 style={styles.titleh1}>translate.me</h1>
                <p style={styles.description}>
                    Cadastre-se e comece a traduzir os seus textos.
                </p>
                <p style={styles.description}>
                    O translate.me fornece uma tradução de qualidade feita por tradutores cadastrados no site.
                    Cada texto é enviado para o tradutor mais capacitado para escrever sua tradução.
                </p>
                <p style={styles.description}>
                    Também não há a necessidade de se preocupar com plágios, nós fragmentamos o seu texto
                    de forma que nenhum tradutor terá acesso completo a ele.
                </p>
                <p style={styles.description}>
                    Cadastre-se agora e envie os seus textos para serem traduzidos, ou seja um tradutor também
                    e ganhe dinheiro fazendo as traduções do site.
                </p>
            </div>
        )
    }

    render() {
        return (
            <div>
                <NavBar logged={true} author={false} />
                <div style={styles.screen}>
                    <p style={styles.title}>Cadastre-se como tradutor</p>
                    <div style={styles.two_columns}>
                        <Form style={styles.half}>
                            {this.cpf_group()}
                            {this.level_group()}
                            {this.language_group()}
                            <FilePond/>
                            {this.button_div()}
                        </Form>
                        {this.text()}
                    </div>
                </div>
                <SimpleFooter/>
            </div>
        );
    }
}
const styles={
    screen:{
        margin: "5%"
    },
    button:{
        fontFamily: "Raleway", backgroundColor: green, borderColor: green,
        marginTop: "20px", width: "50%"
    },
    link_div:{
        width:"40%", marginTop:"25px", marginLeft:"40px"
    },
    link:{
        fontFamily: "Raleway", color: green
    },
    form_text:{
        fontFamily: "Raleway"
    },
    title:{
        fontFamily: "Raleway", fontSize: "35px"
    },
    two_columns:{
        display: "flex", flexDirection: "row"
    },
    half:{
        width: "50%", marginLeft: "5%", marginRight: "5%", marginBottom:"5%"
    },
    description: {
        fontFamily: "Raleway", color: lightgreen, textAlign: "justify"
    },
    titleh1:{
        fontFamily: "Nixie One", color: green
    }
}
export default TranslatorSignUp;
