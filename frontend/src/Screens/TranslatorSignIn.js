import React, { Component } from 'react';
import {Form, Button, Alert} from 'react-bootstrap';
import { green, lightgreen } from '../colors'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer';
import axios from 'axios';
import { FilePond } from 'react-filepond';
import 'filepond/dist/filepond.min.css';

class TranslatorSignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cpf: "",
            level:"",
            certified:"",
            language: "",
            cpf_not_ok: null,
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
    verify_fields(){
        var is_ok = true;
        var email_regex = /\S+@\S+\.\S+/;
        var username_regex = /^[a-zA-Z0-9_]+$/;
        if (this.state.username !== "" && username_regex.test(String(this.state.username))){
            this.setState({username_not_ok:false});
        }else{
            this.setState({ username_not_ok: true });
            is_ok = false;
        } if(email_regex.test(String(this.state.email).toLowerCase())){
            this.setState({ email_not_ok: false });
        } else {
            this.setState({ email_not_ok: true });
            is_ok = false;
        } if (this.state.password !== "" && this.state.password.length > 5){
            this.setState({password_not_ok:false});
        }else{
            this.setState({ password_not_ok: true });
            is_ok = false;
        }  if(this.state.password === this.state.confirm_password){
            this.setState({confirm_password_not_ok: false});
        } else{
            this.setState({ confirm_password_not_ok: true });
            is_ok = false
        }   return is_ok;
    }


    api_conection(){
        axios.defaults.withCredentials = true;
        const url = "http://0.0.0.0:8090/user/api/v0/create/";
        axios.post(url, {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        })
        .then((response) => {
            var new_alert={
                variant: "success",
                headding: "Usuário criado",
                text: "Seu usuário foi criado com sucesso!",
                show:true
            }; this.setState({alert:new_alert});
        })
        .catch((err) => {
            var new_alert = {
                variant: "danger",
                headding: "Erro",
                text: "Seu usuário não pode ser criado!",
                show: true
            }; this.setState({ alert: new_alert });
        })
    }
    async send(){
        if(this.verify_fields()){
            console.log("td certo");
            await this.api_conection();
        }
    }
    form_group(label, placeholder, onChange, thisref, invalid, warning){
        return(
            <Form.Group >
                <Form.Label style={styles.form_text}>{label}</Form.Label>
                <Form.Control
                    style={styles.form_text}
                    placeholder={placeholder}
                    type="string"
                    onChange={onChange}
                    ref={ref => { thisref = ref; }}
                    isInvalid={invalid}
                />
                <Form.Control.Feedback type="invalid">{warning}</Form.Control.Feedback>
            </Form.Group >
        )
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
    cpf_group(){
        return(
            <Form.Group>
                <Form.Label style={styles.form_text}>CPF</Form.Label>
                <Form.Control style={styles.form_text} placeholder="ex.: 000.000.000-00"
                    type="string" onChange={() => { this.setState({cpf:this.state.cpfref.value})}}
                    ref={ref => { this.state.cpfref = ref;}} isInvalid={this.state.cpf_not_ok}/>
                <Form.Control.Feedback type="invalid">CPF inválido</Form.Control.Feedback>
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
                    <option>ALemão</option>
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
    show_alert(){
        return(
            <Alert  variant={this.state.alert.variant} show={this.state.alert.show}>
                <Alert.Heading>{this.state.alert.headding}</Alert.Heading>
                <p>
                    {this.state.alert.text}
                </p>
            </Alert>
        )
    }
    render() {
        return (
            <div>
                <NavBar logged={true} author={false} />
                <div style={styles.screen}>
                    {this.show_alert()}
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
                <Footer/>
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
export default TranslatorSignIn;
