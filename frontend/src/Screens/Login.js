import React, { Component } from 'react';
import {Form, Button } from 'react-bootstrap';
import { white, green, lightgreen } from '../colors'
import { connect } from "react-redux";
import { login } from "../Actions/authActions";


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username:"",
            password:"",
        }
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
    }
    
  handleSubmit(event) {
    event.preventDefault();
    this.props.login(this.state)
  }

  handleChange(event) {
    let fieldName = event.target.name;
    let fieldValue = event.target.value;
    this.setState({[fieldName]: fieldValue})
  }


    username_group(){
        return(
            <Form  onSubmit={this.handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    {/* <Form.Label style={styles.form_text}>Nome de Usuário</Form.Label> */}
                    <Form.Control name="username" onChange={this.handleChange} style={styles.form_control} type="text" placeholder="Nome de Usuário" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    {/* <Form.Label style={styles.form_text}>Senha</Form.Label> */}
                    <Form.Control name="password" onChange={this.handleChange} style={styles.form_control} type="password" placeholder="Senha" />
                </Form.Group>

                <Button style={styles.button} type="submit" onClick={() => this.props.history.push("/homepage_author")}>
                    Entrar
                </Button>
                <p style={styles.register_text}>Não tem conta? &nbsp; <a href="/register">Registre-se</a></p>

            </Form>
        )
    }

    render(){
      console.log(this.state)
        return (
            <div>
                <div style={styles.blank_line}>
                    <div style={styles.border}>
                        <p style={styles.centralize_and_form_text}>Entrar</p>
                        <div style={styles.centralize}>
                                {this.username_group()}
                        </div>
                    </div>
                </div>
                <div style={styles.blank_line}></div>
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
        marginTop: "20px",
        marginBottom: "20px",
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
    },
  register_text:{
        fontFamily: "Raleway",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "15px",
        color: white,
  }

}

export default Login;
