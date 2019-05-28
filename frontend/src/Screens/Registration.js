import React, { Component } from 'react';
import {Form, Button, Alert} from 'react-bootstrap';
import { green, lightgreen } from '../colors'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer';
import axios from 'axios';

class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email:"",
            password:"",
            confirm_password: "",
            username_not_ok: null,
            email_not_ok : null,
            password_not_ok: null,
            confirm_password_not_ok: null,
            usernameref : React.createRef(),
            emailref : React.createRef(),
            passwordref : React.createRef(),
            confirmpasswordref : React.createRef(),
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
            }
            this.setState({alert:new_alert})
        })
        .catch((err) => {
            var new_alert = {
                variant: "danger",
                headding: "Erro",
                text: "Seu usuário não pode ser criado!",
                show: true
            }
            this.setState({ alert: new_alert })
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
    username_group(){
        return(
            <Form.Group>
                <Form.Label style={styles.form_text}>Nome de usuário</Form.Label>
                <Form.Control style={styles.form_text} placeholder="ex.: joao_silva"
                    type="string" onChange={() => { this.setState({username:this.state.usernameref.value})}}
                    ref={ref => { this.state.usernameref = ref;}} isInvalid={this.state.username_not_ok}/>
                <Form.Control.Feedback type="invalid">Nome inválido</Form.Control.Feedback>
            </Form.Group>
        )
    }
    email_group(){
        return(
            <Form.Group>
                <Form.Label style={styles.form_text}>Email</Form.Label>
                <Form.Control
                    style={styles.form_text} type="email" placeholder="ex.: joao@email.com"
                    onChange={() => { this.setState({ email: this.state.emailref.value }) }}
                    ref={ref => { this.state.emailref = ref; }} isInvalid={this.state.email_not_ok} />
                <Form.Control.Feedback type="invalid">Email inválido</Form.Control.Feedback>
            </Form.Group>
        )
    }
    pass_group(){
        return(
            <div>
                <Form.Group>
                    <Form.Label style={styles.form_text}>Senha</Form.Label>
                    <Form.Control
                        type="password" ref={ref => { this.state.passwordref = ref; }}
                        onChange={() => { this.setState({ password: this.state.passwordref.value }) }}
                        isInvalid={this.state.password_not_ok} />
                        <Form.Control.Feedback type="invalid">Senha deve ter no minímo 6 caracteres</Form.Control.Feedback>
                </Form.Group>
                <Form.Group>
                    <Form.Label style={styles.form_text}>Confirme sua senha</Form.Label>
                    <Form.Control
                        onChange={() => { this.setState({ confirm_password: this.state.confirmpasswordref.value }) }}
                        type="password" ref={ref => { this.state.confirmpasswordref = ref; }}
                        isInvalid={this.state.confirm_password_not_ok} />
                    <Form.Control.Feedback type="invalid">As senhas estão diferentes</Form.Control.Feedback>
                </Form.Group>
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
                {/* <NavBar logged={false} /> */}
                <div style={styles.screen}>
                    {this.show_alert()}
                    <p style={styles.title}>Cadastro</p>
                    <div style={styles.two_columns}>
                        <Form style={styles.half}>
                            {this.username_group()}
                            {this.email_group()}
                            {this.pass_group()}
                            {this.button_div()}
                        </Form>
                        {this.text()}
                    </div>
                </div>
                {/* <Footer/> */}
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
export default Registration;
