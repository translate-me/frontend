import React from 'react';
import { Editor, EditorState } from 'draft-js';
import {
  Container, Row, Col, Form, Button,
} from 'react-bootstrap';
import { SimpleFooter } from '../Components/SimpleFooter';

let styles;

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
    // this.domEditor.focus(  );
    document.addEventListener('DOMContentLoaded', function(event) {
      document.querySelectorAll('.charPosition').forEach(el => {
        let characters = el['innerText'].split('');
        el.innerHTML = '';
        characters.forEach(char => {
            let span = document.createElement('span');
            span.innerText = char;
            span.addEventListener('click', function () {
                let position = 0;
                let el = this;
                while (el.previousSibling !== null) {
                    position++;
                    el = el.previousSibling;
                }
                this.innerHTML = this.innerHTML + '\u2728'
                console.log(this.innerHTML + ':' + position);
            });
            el.appendChild(span);
        });
      });
    });
  }

  render() {
    const { editorState } = this.state;

    return (
      <div style={styles.root}>
        <Container>
          <Row>
            <Col>
              <div class="charPosition">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

styles = {
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
