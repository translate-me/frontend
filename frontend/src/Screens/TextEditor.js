import React, { Component } from 'react';
import { Editor, EditorState } from 'draft-js';
import {
  Container, Row, Col, Form, Button,
} from 'react-bootstrap';
import SimpleFooter from '../Components/SimpleFooter';
import NavBar from '../Components/NavBar';

class TextEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editorState: EditorState.createEmpty() };
    this.onChange = editorState => this.setState({ editorState });
    this.logState = () => console.log(this.state.editorState.toJS());
    this.setDomEditorRef = ref => this.domEditor = ref;
    this.focus = () => this.domEditor.focus();
  }

  componentDidMount() {
    this.domEditor.focus();
  }

  render() {
    return (
      <div>
        <NavBar logged={true} author={false}/>
      <div style={styles.root}>
        <Container>
          <Row style={styles.center}>
            <Col>
              <h3><b>Titulo</b></h3>
              <h5>Contexto:</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam justo arcu, lobortis non risus et, tristique suscipit elit. Vestibulum arcu justo, suscipit sed auctor id, sodales ut turpis. Curabitur feugiat est et purus viverra auctor. </p>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Group controlId="originalText">
                <Form.Label>Texto Original</Form.Label>
                <Form.Control as="textarea" value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas massa justo, aliquet eu nibh nec, imperdiet maximus nisl. Nunc dapibus, lectus in dapibus euismod, eros ex consequat tellus, vitae placerat orci sem vel leo. Suspendisse varius tortor et elit consectetur euismod. In sit amet finibus metus. Fusce at posuere felis. Maecenas tincidunt pharetra massa. Nullam at lorem nulla. Vivamus consectetur non ligula at interdum. Suspendisse congue, est eu elementum lacinia, felis est tristique purus, nec efficitur orci nunc eget neque. Integer quis aliquet orci, a malesuada libero. Phasellus scelerisque felis et sem rhoncus, eu ultrices augue cursus. " rows="10" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="originalText">
                <Form.Label>Texto Traduzido</Form.Label>
                <div style={styles.editor} onClick={this.focus}>
                  <Editor
                    editorState={this.state.editorState}
                    onChange={this.onChange}
                    placeholder="Traduza aqui seu texto"
                    ref={this.setDomEditorRef}
                  />
                </div>
              </Form.Group>
              <div style={styles.center}>
                <Button
                  variant="secondary"
                  onClick={this.logState}
                  style={styles.leftButton}
                >
                      Salvar progresso
                </Button>
                <Button
                  variant="primary"
                  onClick={this.logState}
                >
                      Enviar tradução
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
        <SimpleFooter />
      </div>
      </div>

    );
  }
}

const styles = {
  root: {
    fontFamily: '\'Helvetica\', sans-serif',
    padding: 20,
    width: '100%',
  },
  editor: {
    border: '1px solid #ccc',
    cursor: 'text',
    minHeight: '38vh',
    padding: 10,
  },
  button: {
    marginTop: 10,
    textAlign: 'center',
  },
  center: {
    textAlign: 'center',
  },
  right: {
    textAlign: 'right',
  },
  leftButton: {
    marginRight: 10,
  },
};

export default TextEditor;
