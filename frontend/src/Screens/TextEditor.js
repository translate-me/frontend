import React from 'react';
import {
  Row, Col, Form, Button,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import NavBar from '../Components/NavBar';
import { green } from '../colors';
import AnotherSimpleFooter from '../Components/AnotherSimpleFooter';
import axios from 'axios';

class TextEditor extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      frag: this.props.location.state.frag, 
      open: false, 
      trasnlatedText: this.props.location.state.frag.translated_fragment,
      username: this.props.location.state.user
    };
    
    this.logState = () => console.log(this.state.trasnlatedText);
    this.editorRef = React.createRef();
    this.togglePanel = this.togglePanel.bind(this);
  }

  togglePanel(e) {
    this.setState({ open: !this.state.open});
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

  send(done){
    const url = 'http://0.0.0.0:9000/text/api/v0/fragment/update_fragment/' + this.state.frag.id + '/';
    axios.patch(url, {
      "translated_fragment": this.state.trasnlatedText,
      "done": done
    })
    .then(()=>{
      if(done){
        if (window.confirm('Tradução enviada para revisão.')) {
          this.props.history.push({pathname: '/homepage_translator', state: {username: this.state.username}});
        } 
      }else{
        if (window.confirm('Seu progresso foi salvo com sucesso!')){
          this.props.history.push({pathname: '/homepage_translator', state: {username: this.state.username}});
        }
      }
    })
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
                    <p style={styles.title}>{this.state.frag.text.title}</p>
                    <FontAwesomeIcon icon={faAngleDown} style={styles.icon} />
                  </div>
                </Col>
                <Col>
                  <div style={styles.buttondiv}>
                    <Button
                      onClick={() => {this.send(false) }}
                      style={styles.leftButton}
                    >
Salvar progresso
                    </Button>
                    <Button
                      variant="primary"
                      onClick={() => { this.send(true) }}
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
                                  {this.state.frag.text.context}
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
                <Form.Control as="textarea" rows={23} value={this.state.frag.body} />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="originalText">
                <Form.Label style={styles.boldTitle}>Texto Traduzido</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={23}
                  placeholder="Traduza aqui seu texto"
                  value={this.state.trasnlatedText}
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
