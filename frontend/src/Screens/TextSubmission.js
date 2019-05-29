import React, { Component } from 'react';
import {
  Card, Button, Alert, Container, Row, Col, Collapse, Form,
} from 'react-bootstrap';

import Image from 'react-bootstrap/Image';
import TextareaAutosize from 'react-textarea-autosize';
import { FilePond } from 'react-filepond';
import { white, green, lightgreen } from '../colors';
import Cloud from './cloud.png';
import 'filepond/dist/filepond.min.css';


class TextSubmission extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
      upload_toggle: false,
    };
  }

  handleInit() {
    console.log('FilePond instance has initialised', this.pond);
  }

  render() {
    const { upload_toggle } = this.state;
    return (
      <div style={styles.screen}>
        <Container>
          <Row>
            <Col style={styles.title}>
              <h2>Submeta aqui seu arquivo acadêmico para ser traduzido</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <Collapse in={!this.state.upload_toggle}>
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
                        files={this.state.files}
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
                          // console.log(this.readTextFile(this.state.files[0]))
                        }}
                      />
                    </Col>
                  </Row>
                </Container>
              </Collapse>

              <Row>
                <Col style={styles.center}>
                  <Alert.Link
                    onClick={() => this.setState({ upload_toggle: !upload_toggle })}
                    aria-controls="example-collapse-text"
                    aria-expanded={upload_toggle}
                    style={styles.link_toggle}
                  >
                    {upload_toggle ? 'Clique aqui para enviar um arquivo' : 'Clique aqui para digitar o texto'}
                  </Alert.Link>
                  <Collapse in={this.state.upload_toggle}>
                    <Form>
                      <Form.Group controlId="exampleForm">
                        <TextareaAutosize style={styles.medium_width} />
                        {/* <Form.Control as="textarea" rows="3" /> */}
                      </Form.Group>
                      <Row>
                        <Col style={styles.center}>
                          <Form.Label>Escreva seu texto ou copie e cole do seu arquivo</Form.Label>
                        </Col>
                      </Row>

                      <Button variant="primary" type="submit">
                                                    Submit
                      </Button>
                    </Form>
                  </Collapse>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
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
    marginTop: '2vh',
    fontFamily: 'Raleway',
    textAlign: 'center',
    fontSize: '35px',
  },
  cloud_image: {
    height: '70px',
    width: '70px',
  },
  upload_box: {
    textAlign: 'center',
    border: '1px solid black',
    width: '50%',
  },
  link_toggle: {
    color: 'rgb(43, 66, 62)',
  },
  medium_width: {
    width: '75%',
  },
  center: {
    textAlign: 'center',
  },

};

export default TextSubmission;
