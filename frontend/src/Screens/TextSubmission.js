import React from 'react';
import {
  Button, Alert, Container, Row, Col, Collapse, Form, Nav
} from 'react-bootstrap';
import { Link } from "react-router-dom";
import Image from 'react-bootstrap/Image';
import TextareaAutosize from 'react-textarea-autosize';

import { FilePond } from 'react-filepond';
import { white, green } from '../colors';
import Cloud from './cloud.png';
import 'filepond/dist/filepond.min.css';
import NavBar from '../Components/NavBar'
import SimpleFooter from '../Components/SimpleFooter';

let styles;

class TextSubmission extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
      textContent: 'teste',
      uploadToggle: false,
    };
  }

  handleTextContentChange = (e) => {
    this.setState({
      textContent: e.target.value
    }, () => {
      console.log('handle ', this.state.textContent)
    });
  }

  handleInit() {
    console.log('FilePond instance has initialised', this.pond);
  }

  render() {
    const { uploadToggle, files } = this.state;
    return (
      <div style={styles.screen}>
        <NavBar logged={true} author={true} />
        <Container>
          <Row>
            <Col style={styles.title}>
              <h2>Submeta aqui seu arquivo acadêmico para ser traduzido</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <Collapse in={!uploadToggle}>
                <Container style={styles.upload_box}>
                  <Row>
                    <Col>
                      <Image style={styles.cloud_image} src={Cloud} />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <p>
                          Arraste seu arquivo para cá
                        {' '}
                        <br />
                          ou
                      </p>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FilePond
                        ref={ref => (this.pond = ref)}
                        files={files}
                        allowMultiple={false}
                        maxFiles={1}
                        server="http://0.0.0.0:9000/filepond/process/"
                        oninit={() => this.handleInit()}
                        onupdatefiles={(fileItems) => {
                          // Set currently active file objects to this.state
                          this.setState({
                            files: fileItems.map(fileItem => fileItem.file),
                          });
                          console.log(this.state.files);
                        }}
                      />
                    </Col>
                  </Row>
                </Container>
              </Collapse>

              <Row>
                <Col style={styles.center}>
                  <Alert.Link
                    onClick={() => this.setState({ uploadToggle: !uploadToggle })}
                    aria-controls="example-collapse-text"
                    aria-expanded={uploadToggle}
                    style={styles.link_toggle}
                  >
                    {uploadToggle ? 'Clique aqui para enviar um arquivo' : 'Clique aqui para digitar o texto'}
                  </Alert.Link>
                  <Collapse in={this.state.uploadToggle}>
                    <Form onSubmit={e => this.handleSubmit(e)}>
                    <Form.Group controlId="form.ControlTextarea1">
                      <Form.Control type="text" value={this.state.textContent} onChange={this.handleTextContentChange} as="textarea" rows="3" />
                    </Form.Group>
                      <Row>
                        <Col>
                          <Form.Label>
                              Escreva seu texto ou copie e cole do seu arquivo
                          </Form.Label>
                        </Col>
                      </Row>

                      <Link to ={{
                        pathname: "/text_information",
                        state: { 
                            textContent: this.state.textContent
                        }
                      }} >
                        <Button type="submit" style={styles.button} >
                          Enviar
                        </Button>
                      </Link>
                    </Form>
                  </Collapse>
                </Col>
                
              </Row>
              <Row style={styles.center}>
                <Col>
                <Link to ={{
                  pathname: "/breakpoints", 
                  state: { 
                      files: this.state.files
                  }
                }} >
                  <Button>
                    Teste
                  </Button>
                </Link>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <SimpleFooter/>
      </div>

    );
  }
}


styles = {
  screen: {
    backgroundColor: white,
    display: 'flex',
    flexDirection: 'column',
    alignText: 'center',
    alignSelf: 'center',
    paddingBottom: '20%',
  },
  title: {
    marginTop: '10vh',
    fontFamily: 'Raleway',
    textAlign: 'center',
    fontSize: '35px',
  },
  cloud_image: {
    height: '70px',
    width: '70px',
    marginTop: '3vh',
  },
  upload_box: {
    textAlign: 'center',
    border: '1px solid black',
    width: '50%',
    marginTop: '5vh',
  },
  link_toggle: {
    color: 'rgb(43, 66, 62)',
    marginTop: '10vh',
  },
  medium_width: {
    width: '75%',
    marginTop: '3vh',

  },
  center: {
    textAlign: 'center',
    marginTop: '3vh',
  },
  button: {
    fontFamily: 'Raleway',
    backgroundColor: green,
    borderColor: green,
    marginTop: '20px',
    width: '10%',
    marginBottom: '10%',
  },

};

export default TextSubmission;
