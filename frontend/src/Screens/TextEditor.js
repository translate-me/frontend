import React from 'react';
import {
  Row, Col, Form, Button,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import NavBar from '../Components/NavBar';
import { green } from '../colors';
import AnotherSimpleFooter from '../Components/AnotherSimpleFooter';

class TextEditor extends React.Component {
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
    return (
      <div>
        <NavBar logged={true} author={false} />
        <div style={styles.root}>
          <div>
            <div>
              <Row>
                <Col>
                  <div style={styles.two_columns} onClick={e => this.togglePanel(e)}>
                    <p style={styles.title}>Título</p>
                    <FontAwesomeIcon icon={faAngleDown} style={styles.icon} />
                  </div>
                </Col>
                <Col>
                  <div style={styles.buttondiv}>
                    <Button
                      onClick={this.logState}
                      style={styles.leftButton}
                    >
Salvar progresso
                    </Button>
                    <Button
                      variant="primary"
                      onClick={this.logState}
                      style={styles.rightButton}
                    >
Enviar tradução
                    </Button>
                  </div>
                </Col>
              </Row>
            </div>
            {
                            this.state.open ? (
                              <div>
                                <p style={styles.context}>
                                  <b>Contexto: </b>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam justo arcu, lobortis non risus et, tristique suscipit elit. Vestibulum arcu justo, suscipit sed auctor id, sodales ut turpis. Curabitur feugiat est et purus viverra auctor.
                                </p>
                              </div>
                            ) : null
                        }
            <hr />
          </div>
          <Row>
            <Col>
              <Form.Group controlId="originalText">
                <Form.Label style={styles.boldTitle}>Texto Original</Form.Label>
                <Form.Control as="textarea" rows={23} value="Lorem ipsum dlq;dlkwq;kr'pq'RPhAJDolor sit amet, consectetur adipiscing elit. Maecenas massa justo, aliquet eu nibh nec, imperdiet maximus nisl. Nunc dapibus, lectus in dapibus euismod, eros ex consequat tellus, vitae placerat orci sem vel leo. Suspendisse varius tortor et elit consectetur euismod. In sit amet finibus metus. Fusce at posuere felis. Maecenas tincidunt pharetra massa. Nullam at lorem nulla. Vivamus consectetur non ligula at interdum. Suspendisse congue, est eu elementum lacinia, felis est tristique purus, nec efficitur orci nunc eget neque. Integer quis aliquet orci, a malesuada libero. Phasellus scelerisque felis et sem rhoncus, eu ultrices augue cursus. " />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="originalText">
                <Form.Label style={styles.boldTitle}>Texto Traduzido</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={23}
                  placeholder="Traduza aqui seu texto"
                  onChange={() => { this.setState({ trasnlatedText: this.editorRef.value }); }}
                  ref={(ref) => { this.editorRef = ref; }}
                />
              </Form.Group>
            </Col>
          </Row>
        </div>
        <AnotherSimpleFooter/>
      </div>

    );
  }
}

const styles = {
  root: {
    fontFamily: 'Raleway',
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
    backgroundColor: green,
    borderColor: green,
    fontSize: 15,
  },
  rightButton: {
    backgroundColor: green,
    borderColor: green,
    fontSize: 15,
  },
  textbox: {
    height: '100px',
    padding: '5%',
  },
  title: {
    fontSize: 25,
    fontFamily: 'Raleway',
    marginRight: '2%',
  },
  context: {
    fontSize: 16,
    fontFamily: 'Raleway',
  },
  buttondiv: {
    textAlign: 'right',
    position: 'relative',
  },
  colapse: {
    borderBottom: 1,
    borderColor: green,

  },
  boldTitle: {
    fontWeight: 'bold',
  },
  two_columns: {
    display: 'flex', flexDirection: 'row',
  },
  icon: {
    marginTop: 5,
    fontSize: 30,
    color: green,
  },
};

export default TextEditor;
