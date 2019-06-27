import React, { Component } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';
import { green, lightgreen } from '../colors';
import SimpleFooter from '../Components/SimpleFooter';
import NavBar from '../Components/NavBar';

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      usernameNotOk: null,
      emailNotOk: null,
      passwordNotOk: null,
      confirmPasswordNotOk: null,
      usernameRef: React.createRef(),
      emailRef: React.createRef(),
      passwordRef: React.createRef(),
      confirmpasswordref: React.createRef(),
      alert: {
        variant: '',
        headding: '',
        text: '',
        show: false,
      },
    };
  }

  verifyFields() {
    let isOk = true;
    const emailRegex = /\S+@\S+\.\S+/;
    const usernameRegex = /^[a-zA-Z0-9_]+$/;
    const {
      username, email, password, confirmPassword,
    } = this.state;

    if (username !== '' && usernameRegex.test(String(username))) {
      this.setState({ usernameNotOk: false });
    } else {
      this.setState({ usernameNotOk: true });
      isOk = false;
    } if (emailRegex.test(String(email).toLowerCase())) {
      this.setState({ emailNotOk: false });
    } else {
      this.setState({ emailNotOk: true });
      isOk = false;
    } if (password !== '' && password.length > 5) {
      this.setState({ passwordNotOk: false });
    } else {
      this.setState({ passwordNotOk: true });
      isOk = false;
    } if (password === confirmPassword) {
      this.setState({ confirmPasswordNotOk: false });
    } else {
      this.setState({ confirmPasswordNotOk: true });
      isOk = false;
    } return isOk;
  }

  apiConnection() {
    axios.defaults.withCredentials = true;
    const url = 'http://0.0.0.0:8090/user/api/v0/create/';
    const {
      username, email, password,
    } = this.state;

    axios.post(url, {
      username,
      email,
      password,
    })
      .then((response) => {
        const newAlert = {
          variant: 'success',
          headding: 'Usuário criado',
          text: 'Seu usuário foi criado com sucesso!',
          show: true,
        };
        this.setState({ alert: newAlert });
        console.log(response);
      })
      .catch((err) => {
        const newAlert = {
          variant: 'danger',
          headding: 'Erro',
          text: 'Seu usuário não pode ser criado!',
          show: true,
        };
        this.setState({ alert: newAlert });
        console.log(err);
      });
  }

  async send() {
    if (this.verifyFields()) {
      console.log('td certo');
      await this.apiConnection();
    }
  }

  formGroup(label, placeholder, onChange, thisref, invalid, warning) {
    return (
      <Form.Group>
        <Form.Label style={styles.form_text}>{label}</Form.Label>
        <Form.Control
          style={styles.form_text}
          placeholder={placeholder}
          type="string"
          onChange={onChange}
          ref={(ref) => { thisref = ref; }}
          isInvalid={invalid}
        />
        <Form.Control.Feedback type="invalid">{warning}</Form.Control.Feedback>
      </Form.Group>
    );
  }

  buttonDiv() {
    return (
      <div style={styles.two_columns}>
        <Button variant="primary" style={styles.button} onClick={() => { this.send(); }}>
                    Cadastrar
        </Button>
        <div style={styles.link_div}>
          <a style={styles.link} href="/login">Já tenho cadastro</a>
        </div>
      </div>
    );
  }

  usernameGroup() {

    return (
      <Form.Group>
        <Form.Label style={styles.form_text}>Nome de usuário</Form.Label>
        <Form.Control
          style={styles.form_text}
          placeholder="ex.: joao_silva"
          type="string"
          onChange={() => { this.setState({ username: this.state.usernameref.value }); }}
          //ref={(ref) => { this.setState({usernameref: ref})}}
          isInvalid={this.state.username_not_ok}
        />
        <Form.Control.Feedback type="invalid">Nome inválido</Form.Control.Feedback>
      </Form.Group>
    );
  }

  emailGroup() {

    return (
      <Form.Group>
        <Form.Label style={styles.form_text}>Email</Form.Label>
        <Form.Control
          style={styles.form_text}
          type="email"
          placeholder="ex.: joao@email.com"
          onChange={() => { this.setState({ email: this.state.emailref.value }); }}
          //ref={(ref) => { this.setState({emailref: ref})}}
          isInvalid={this.state.email_not_ok}
        />
        <Form.Control.Feedback type="invalid">Email inválido</Form.Control.Feedback>
      </Form.Group>
    );
  }

  passGroup() {
    const {
      confirmPasswordNotOk,
    } = this.state;

    return (
      <div>
        <Form.Group>
          <Form.Label style={styles.form_text}>Senha</Form.Label>
          <Form.Control
            type="password"
            //ref={(ref) => { this.setState({passwordref: ref})}}
            onChange={() => { this.setState({ password: this.state.passwordref.value }); }}
            isInvalid={this.state.password_not_ok}
          />
          <Form.Control.Feedback type="invalid">Senha deve ter no minímo 6 caracteres</Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Label style={styles.form_text}>Confirme sua senha</Form.Label>
          <Form.Control
            type="password"
            onChange={() => { this.setState({ confirmPassword: this.confirmPasswordRef.value }); }}
            ref={(ref) => { this.confirmPasswordRef = ref; }}
            isInvalid={confirmPasswordNotOk}
          />
          <Form.Control.Feedback type="invalid">As senhas estão diferentes</Form.Control.Feedback>
        </Form.Group>
      </div>
    );
  }

  text() {
    return (
      <div style={styles.half}>
        <h1 style={styles.titleh1}>translate.me</h1>
        <p style={styles.description}>
            Cadastre-se e comece a traduzir os seus textos.
        </p>
        <p style={styles.description}>
            O translate.me fornece uma tradução de qualidade feita por
            tradutores cadastrados no site.
            Cada texto é enviado para o tradutor mais capacitado para
            escrever sua tradução.
        </p>
        <p style={styles.description}>
            Também não há a necessidade de se preocupar com plágios,
            nós fragmentamos o seu texto
            de forma que nenhum tradutor terá acesso completo a ele.
        </p>
        <p style={styles.description}>
            Cadastre-se agora e envie os seus textos para serem traduzidos,
            ou seja um tradutor também
            e ganhe dinheiro fazendo as traduções do site.
        </p>
      </div>
    );
  }

  showAlert() {
    const { alert } = this.state;

    return (
      <Alert variant={alert.variant} show={alert.show}>
        <Alert.Heading>{alert.headding}</Alert.Heading>
        <p>
          {alert.text}
        </p>
      </Alert>
    );
  }

  render() {
    return (
      <div>
        <NavBar logged={false} />
        <div style={styles.screen}>
          {this.showAlert()}
          <p style={styles.title}>Cadastro</p>
          <div style={styles.two_columns}>
            <Form style={styles.half}>
              {this.usernameGroup()}
              {this.emailGroup()}
              {this.passGroup()}
              {this.buttonDiv()}
            </Form>
            {this.text()}
          </div>
        </div>
        <SimpleFooter />
      </div>
    );
  }
}
const styles = {
  screen: {
    margin: '5%',
  },
  button: {
    fontFamily: 'Raleway',
    backgroundColor: green,
    borderColor: green,
    marginTop: '20px',
    width: '50%',
  },
  link_div: {
    width: '40%', marginTop: '25px', marginLeft: '40px',
  },
  link: {
    fontFamily: 'Raleway', color: green,
  },
  form_text: {
    fontFamily: 'Raleway',
  },
  title: {
    fontFamily: 'Raleway', fontSize: '35px',
  },
  two_columns: {
    display: 'flex', flexDirection: 'row',
  },
  half: {
    width: '50%', marginLeft: '5%', marginRight: '5%', marginBottom: '5%',
  },
  description: {
    fontFamily: 'Raleway', color: lightgreen, textAlign: 'justify',
  },
  titleh1: {
    fontFamily: 'Nixie One', color: green,
  },
};
export default Registration;
