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
            validated: false 
        }
    }

    handleSubmit(event) {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        this.setState({ validated: true });
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
                        value={this.state.name}
                    />
                    <FormControl.Feedback type="valid">Cade o email amg?</FormControl.Feedback>
                </Form.Group>
                <Form.Group>
                    <Form.Label style={styles.form_text}>Email</Form.Label>
                    <Form.Control style={styles.form_text} type="email" placeholder="ex.: joao@email.com"/>
                </Form.Group>
                <Form.Group>
                    <Form.Label style={styles.form_text}>Senha</Form.Label>
                    <Form.Control type="password"/>
                </Form.Group>
                <Form.Group>
                    <Form.Label style={styles.form_text}>Confirme sua senha</Form.Label>
                    <Form.Control type="password"/>
                </Form.Group>
                <div style={styles.two_columns}>
                <Button variant="primary" style={styles.button} onClick={()=>console.log(this.state.email)}>
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
        marginRight: "5%"
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