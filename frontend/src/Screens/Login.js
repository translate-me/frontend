import React, { Component } from 'react';
import {Form, Button, Alert} from 'react-bootstrap';
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer';
import { white, green, lightgreen } from '../colors'

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
                    {/* <Form.Label style={styles.form_text}>Nome de Usuário</Form.Label> */}
                    <Form.Control style={styles.form_control} type="text" placeholder="Nome de Usuário" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    {/* <Form.Label style={styles.form_text}>Senha</Form.Label> */}
                    <Form.Control style={styles.form_control} type="password" placeholder="Senha" />
                </Form.Group>

                <Button style={styles.button} type="submit">
                    Enviar
                </Button>

            </Form>
        )
    }

    render(){
        return (
            <div>
                <NavBar logged={false} />
                <div style={styles.blank_line}>
                    <div style={styles.border}>
                        <p style={styles.centralize_and_form_text}>Entrar</p>
                        <div style={styles.centralize}>
                            <Form>
                                {this.username_group()}
                                {/* {this.pass_group()}
                                {this.button_div()} */}
                            </Form>
                        </div>
                    </div>
                </div>
                <div style={styles.blank_line}></div>
                <Footer/>
            </div>
        );
    }

    
} 
const styles={
    screen:{
        margin: "5%"
    },
    blank_line:{
        marginTop: "5%"
    },
    button:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Raleway",
        backgroundColor: lightgreen,
        borderColor: white,
        fontSize: "20px",
        marginTop: "60px",
        marginBottom: "100px",
        width: "100%",
        color: white
    },
    border:{
        borderStyle: "solid",
        borderWidth: "5px 5px 5px 5px",
        borderColor: lightgreen,
        marginLeft: "35%",
        marginRight: "35%",
        backgroundColor: green
    },
    form_control:{
        fontFamily: "Raleway",
        fontSize: "18px",
        marginTop: "30px"
    },
    centralize_and_form_text:{
        fontFamily: "Raleway",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "35px",
        color: white,
        marginTop: "50px",
        marginBottom: "50px"

    },
    centralize:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }

}
export default Login;
