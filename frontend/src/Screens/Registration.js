import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap';
import { white, green, lightgreen } from '../colors'

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
            <Form>
                <Form.Group>
                    <Form.Label style={styles.form_text}>Nome</Form.Label>
                    <Form.Control style={styles.form_text} placeholder="ex.: João da Silva"/>
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
                <Button variant="primary" type="submit" style={styles.button}onClick={()=> this.handleSubmit}>
                    Submit
                </Button>
            </Form>
        )
    }
    render() {
        return (
            <div style={styles.screen}>
                {this.registration_form()}
            </div>
        );
    }
}
const styles={
    screen:{
        margin: "10%"
    },
    button:{
        fontFamily: "Raleway",
        backgroundColor: green,
        borderColor: green
    },
    form_text:{
        fontFamily: "Raleway"
    }
}
export default Registration;