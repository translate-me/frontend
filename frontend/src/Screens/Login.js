import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap';
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer';
import { white, green, lightgreen } from '../colors'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password:""
        }
    }

    login_group(){
        return(
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control style={styles.form_control} type="text" placeholder="Nome de Usuário" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
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
                                {this.login_group()}
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
