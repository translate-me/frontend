import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap';
import FormControl from 'react-bootstrap/FormControl'
import { white, green, lightgreen } from '../colors'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer';

class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email:"",
            password:"",
            confirm_password: "",
            name_not_ok: null,
            email_not_ok : null,
            password_not_ok: null,
            confirm_password_not_ok: null,
            nameref : React.createRef(),
            emailref : React.createRef(),
            passwordref : React.createRef(),
            confirmpasswordref : React.createRef()
        }
    }

    verify_fields(){
        var is_ok = true;
        var email_regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if (this.state.name !== "" ){
            this.setState({name_not_ok:false});
        }else{
            this.setState({ name_not_ok: true });
            is_ok = false;
        }

        if(email_regex.test(String(this.state.email).toLowerCase())){
            this.setState({ email_not_ok: false });
        } else {
            this.setState({ email_not_ok: true });
            is_ok = false;
        }

        if(this.state.password === this.state.confirm_password){
                this.setState({confirm_password_not_ok: false});
        }else{
            this.setState({ confirm_password_not_ok: true });
            is_ok = false
        }
        return is_ok;
    }

    send(){
        if(this.verify_fields()){
            console.log("td certo");
            
        }

    }

    registration_form(){
        return(
            <Form style={styles.half}>
                <Form.Group>
                    <Form.Label style={styles.form_text}>Nome</Form.Label>
                    <Form.Control
                        style={styles.form_text}
                        placeholder="ex.: João da Silva"
                        type="string"
                        onChange={() => { this.setState({name:this.state.nameref.value})}}
                        ref={ref => { this.state.nameref = ref;}}
                        isInvalid={this.state.name_not_ok}
                    />
                    <Form.Control.Feedback type="invalid">Nome não pode ser vazio</Form.Control.Feedback>
                </Form.Group>
                <Form.Group>
                    <Form.Label style={styles.form_text}>Email</Form.Label>
                    <Form.Control
                        style={styles.form_text}
                        type="email"
                        placeholder="ex.: joao@email.com"
                        onChange={() => { this.setState({ email: this.state.emailref.value }) }}
                        ref={ref => { this.state.emailref = ref; }}
                        isInvalid={this.state.email_not_ok}
                    />
                    <Form.Control.Feedback type="invalid">Email inválido</Form.Control.Feedback>
                </Form.Group>
                <Form.Group>
                    <Form.Label style={styles.form_text}>Senha</Form.Label>
                    <Form.Control
                        type="password"
                        onChange={() => { this.setState({password:this.state.passwordref.value})}}
                        ref={ref => { this.state.passwordref = ref;}}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label style={styles.form_text}>Confirme sua senha</Form.Label>
                    <Form.Control
                        type="password"
                        onChange={() => { this.setState({ confirm_password: this.state.confirmpasswordref.value }) }}
                        ref={ref => { this.state.confirmpasswordref = ref; }}
                        isInvalid={this.state.confirm_password_not_ok}
                    />
                    <Form.Control.Feedback type="invalid">As senhas estão diferentes</Form.Control.Feedback>
                </Form.Group>
                <div style={styles.two_columns}>
                <Button variant="primary" style={styles.button} onClick={()=>{ this.verify_fields()}} >
                    Cadastrar
                </Button>
                <div style={styles.link_div}>
                <a style={styles.link} href="/">Já tenho cadastro</a>
                    </div>

                </div>
            </Form>
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
                <NavBar logged={false} />
                <div style={styles.screen}>
                    <p style={styles.title}>Cadastro</p>
                    <div style={styles.two_columns}>
                        {this.registration_form()}
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
        fontFamily: "Raleway",
        backgroundColor: green,
        borderColor: green,
        marginTop: "20px",
        width: "50%"
    },
    link_div:{
        width:"40%",
        marginTop:"25px",
        marginLeft:"40px"
    },
    link:{
        fontFamily: "Raleway",
        color: green
    },
    form_text:{
        fontFamily: "Raleway"
    },
    title:{
        fontFamily: "Raleway",
        fontSize: "35px"
    },
    two_columns:{
        display: "flex",
        flexDirection: "row"
    },
    half:{
        width: "50%",
        marginLeft: "5%",
        marginRight: "5%",
        marginBottom:"5%"
    },
    description: {
        fontFamily: "Raleway",
        color: lightgreen,
        textAlign: "justify"
    },
    titleh1:{
        fontFamily: "Nixie One",
        color: green
    }
}
export default Registration;