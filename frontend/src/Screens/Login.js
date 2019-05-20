import React, { Component } from 'react';
import {Form, Button, Alert} from 'react-bootstrap';
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer';
import { green, lightgreen } from '../colors'

class Login extends Component {
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


    username_group(){
        return(
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label style={styles.form_text}>Nome de usuário</Form.Label>
                    <Form.Control style={styles.form_text} type="text" placeholder="Nome de Usuário" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label style={styles.form_text}>Senha</Form.Label>
                    <Form.Control style={styles.form_text} type="password" placeholder="Senha" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Enviar
                </Button>

            </Form>
        )
    }

    render(){
        return (
            <div style={styles.screen}>
                <NavBar logged={false} />
                <div style={styles.two_columns}>
                    <p style={styles.centralize_and_form_text}>Login</p>
                    <div style={styles.centralize}>
                        <Form>
                            {this.username_group()}
                            {/* {this.pass_group()}
                            {this.button_div()} */}
                        </Form>
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
    centralize_and_form_text:{
        fontFamily: "Raleway",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    title:{
        fontFamily: "Raleway",
        fontSize: "35px"
    },
    centralize:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
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
export default Login;
