import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import NavBar from '../Components/NavBar';
import { white, green, lightgreen } from '../colors';
import Footer from '../Components/Footer';

class HomepageAuthor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      advantages: [
        'Vantagem 1',
        'Vantagem 2',
        'Vantagem 3',
        'Vantagem 4',
      ],
      steps: [
        'Faça o upload do seu texto acadêmico aqui',
        'Defina quais são os pontos que cada tradutor pode visualizar',
        'Aguarde a tradução ser completa e revisada',
        'Receba seu texto traduzido e revisado com sucesso!',
      ],
    };
  }

  render() {
    return (
      <div style={styles.screen}>
        <NavBar logged= {true}/>
        <p style={styles.title}>
                    Traduza seus textos acadêmicos com qualidade, com uma tradução profissional! Agora, fácil assim!
        </p>
        <div style={styles.advantages_square}>
          {this.state.advantages.map((item, i) => (
            <Card key={i} style={styles.advantages_card}>
              <Card.Title style={styles.advantages_title}>
                {item}
              </Card.Title>
            </Card>
          ))}
        </div>
        <Button style={styles.button}>Quero Traduzir Agora!</Button>

        <div style={styles.steps_div}>
          {this.state.steps.map((item, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'collumn' }}>
              <Card style={styles.steps_card}>
                <Card.Title style={styles.steps_title}>
                  {item}
                </Card.Title>
                <Card.Body>
                  <div style={styles.number}>
                    <p style={{ color: white }}>{i + 1}</p>
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
        <Footer/>
      </div>
    );
  }
}


const styles = {
  screen: {
    backgroundColor: white,
    display: 'flex',
    flexDirection: 'column',
    alignText: 'center',
    alignSelf: 'center',
  },
  title: {
    marginTop: '10%',
    fontFamily: 'Raleway',
    textAlign: 'center',
    padding: '5px',
    fontSize: '35px',
    marginLeft: '10%',
    marginRight: '10%',
  },
  advantages_square: {
    borderColor: green,
    borderStyle: 'solid',
    alignSelf: 'center',
    display: 'flex',
    padding: '2%',
    marginBottom: '5%',
    borderRadius: '10px',
    width: '50%',
  },
  advantages_card: {
    backgroundColor: green,
    margin: '2%',
    padding: '2%',
    width: '100%',
  },
  advantages_title: {
    fontFamily: 'Raleway',
    fontSize: '20px',
    color: white,
    justifyContent: 'center',
  },
  button: {
    fontFamily: 'Raleway',
    fontSize: '20px',
    alignSelf: 'center',
    backgroundColor: '#2B423E',
    marginBottom: '5%',
    width: '30%',
    borderColor: '#2B423E',
  },
  steps_div: {
    backgroundColor: lightgreen,
    marginTop: '2%',
    alignSelf: 'center',
    display: 'flex',
    flexDirection: 'row',
    padding: '2%',
    alignItems: 'center',
  },
  steps_card: {
    borderColor: green,
    borderStyle: 'solid',
    backgroundColor: white,
    width: '100%',
    height: '100%',
    borderRadius: 0,
    padding: '5px',
    alignItems: 'center',
    margin: '5px',
  },
  steps_title: {
    fontFamily: 'Raleway',
    textAlign: 'center',
    margin: '5px',
  },
  number: {
    border: '1px',
    borderRadius: '100%',
    borderStyle: 'solid',
    height: '30px',
    width: '30px',
    textAlign: 'center',
    backgroundColor: lightgreen,
  },

};

export default HomepageAuthor;
