import React, { Component } from 'react';
import { Container, Row, Card, ProgressBar, Button, Col, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFeatherAlt, faGraduationCap} from '@fortawesome/free-solid-svg-icons';
import NavBar from '../Components/NavBar';
import SimpleFooter from '../Components/SimpleFooter';
import { intro, author, translator, new_translation} from './HowItWorksTexts';
import { green } from '../colors';


class Revision extends Component {
  constructor(props) {
    super(props);
    this.state = { trasnlatedText: '', open: false };
    this.logState = () => console.log(this.state.trasnlatedText);
    this.editorRef = React.createRef();
    this.togglePanel = this.togglePanel.bind(this);
  }

  togglePanel(e) {
    this.setState({ open: !this.state.open });
  }

  myBlockRenderer(contentBlock) {
    const type = contentBlock.getType();
    if (type === 'atomic') {
      return {
        editable: false,
        props: {
          foo: 'bar',
        },
      };
    }
  }

  render() {
    return(
      <div style={styles.page}>
      <NavBar logged={true} author={false}/>
      <div style = {styles.insidePage}>
      <div >
        <div>
          <Row>
            <Col>
              <div style={styles.two_columns} onClick={e => this.togglePanel(e)}>
                <p style={styles.title}> Revisão de tradução </p>
              </div>
            </Col>
          </Row>
        </div>
        <hr/>
      </div>
      <Row>
        <Col>
          <Form.Group controlId="originalText">
            <Form.Label style={styles.boldTitle}>Texto Original</Form.Label>
            <Form.Control as="textarea" rows={15} value="In software engineering, a design pattern is a general repeatable solution to a commonly occurring problem in software design. A design pattern isn't a finished design that can be transformed directly into code. It is a description or template for how to solve a problem that can be used in many different situations. " />
            <Form.Control
            style = {styles.revisionbox}
            as="textarea"
            rows={5}
            placeholder="Insira aqui sua avaliação sobre a tradução"
            onChange={() => { this.setState({ trasnlatedText: this.editorRef.value }); }}
            ref={(ref) => { this.editorRef = ref; }}
            />
            <Col>
            </Col>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="originalText">
            <Form.Label style={styles.boldTitle}>Texto Traduzido</Form.Label>
            <Form.Control as="textarea" rows={15} value=" Na engenharia de software, um design pattern é uma solução geral repetível para um problema comumente ocorrido no projeto de software. Um design pattern não é um design acabado que pode ser transformado diretamente em código. É uma descrição ou modelo de como resolver um problema que pode ser usado em muitas situações diferentes. " />
          </Form.Group>
          <Form.Label style={styles.scoreTitle}> Dê uma nota para essa tradução </Form.Label>
          <div>
          <label style = {styles.radioStyle} class="radio-inline"> <input type="radio" name="optradio" checked/> 1 </label>
          <label style = {styles.radioStyle} class="radio-inline"> <input type="radio" name="optradio"/> 2 </label>
          <label style = {styles.radioStyle} class="radio-inline"> <input type="radio" name="optradio"/> 3 </label>
          <label style = {styles.radioStyle} class="radio-inline"> <input type="radio" name="optradio"/> 4 </label>
          <label style = {styles.radioStyle} class="radio-inline"> <input type="radio" name="optradio"/> 5 </label>
          </div>
          <div style={styles.buttondiv}>
          <Button
          variant="primary"
          onClick={this.logState}
          style={styles.buttonStyle}
          >
          Enviar revisão
          </Button>
          </div>
        </Col>
      </Row>
      </div>
      <SimpleFooter/>
  </div>
    );
  }
}

const styles = {
  page: {
    fontFamily: 'Raleway'
  },
  insidePage: {
    padding: 20,
    width: '100%'
  },
  title: {
    fontSize: 25,
    fontFamily: 'Raleway',
    marginRight: '5%',
  },
  revisionbox: {
    marginTop: '70%'
  },
   boldTitle: {
  fontWeight: 'bold',
  },
  revisionbox: {
    marginTop: '5%',
  },
  buttondiv: {
    marginTop: '2%',
    width: '80%'
  },
  buttonStyle: {
    marginRight: 10,
    backgroundColor: green,
    borderColor: green,
    fontSize: 15,
 },
  radioStyle: {
    marginRight: '3%'
    },
  scoreTitle: {
  marginTop: '2%',
  fontWeight: 'bold'
  }
};

export default Revision;
