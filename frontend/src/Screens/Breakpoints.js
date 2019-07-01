import React from 'react';
import {
  Container, Row, Col, Form, Button, ProgressBar,
} from 'react-bootstrap';
import NavBar from '../Components/NavBar';
import { green } from '../colors';
import { calculatePrivacyLevel } from '../Util/util';
import SimpleFooter from '../Components/SimpleFooter';
import axios from 'axios';

const breakpoints = [];
let styles;

export class Breakpoints extends React.Component {
  constructor(props) {
    super(props);
    
    const oldState = this.props.location.state
    console.log('state anterior: ', oldState)

    this.state = {
      title: oldState.textTitle,
      fileName: '',
      fileExtension: '',
      textContent: oldState.textContent,
      textContext: oldState.textContext,
      username: oldState.username,
      
      complexityLevel: oldState.complexityLevel,
      knowledgeArea: oldState.knowledgeArea,
      textContext: oldState.textContext,
      originLanguage: oldState.originLanguage,
      translateLanguage: oldState.translateLanguage,

      wordcount: 0,
      breakpoints: [],
      fragments: [],
      textFragments: []
    };
  }

  onMouseUp = (e) => {
    const position = e.target.selectionStart;
    const text = e.target.value;

    if (position !== text.length){
      breakpoints.push(position);
    } else {
      return console.log('error')
    }
    

    console.log(position);
    console.log('breakpoints: ', breakpoints);
    console.log(this.state)

    const array = Array.from(text);
    array[position - 2] = `${array[position - 2]}🔴`;
    // console.log('array: ', array)

    const newArray = array.join('');
    // console.log('newArray: ', newArray)

    this.setState({
      textContent: newArray,
      breakpoints: breakpoints,
      wordcount: e.target.value.length,
    });
  };

  removeBreakpoint = () => {
    const index = breakpoints.pop();
    console.log(index)

    const array = Array.from(this.state.textContent);

    console.log('array ', array)
    array[index - 1] = ''

    const newArray = array.join('');

    this.setState({
      textContent: newArray
    })    
  }

  // mountSendObj(){

  // }

  send(){
    console.log('frags', this.state.fragments);
    
    var obj = {
      title: this.state.title,
      context: this.state.textContext,
      language: this.state.translateLanguage.value,
      level: this.state.complexityLevel.value,
      categories: [this.state.knowledgeArea.value],
      author: this.state.username,
      fragments: this.state.fragments.length > 0? this.state.fragments : [{body: this.state.textContent, type: "text"}]
    }
    console.log("veja aquii" ,obj);
    

    const url = 'http://0.0.0.0:9000/text/api/v0/text/create/'
    axios.post(url, obj)
    .then(res =>{
      console.log(res);
      this.props.history.push("/payment", this.state)
    })
    .catch(err => {
      console.log(err.response);
      
    })
  }

  sendFragment = async() => {
    const completeText = this.state.textContent;
    const fragments = completeText.split('🔴');

    const fragmentsObject = fragments.map(fragment => ({ body: fragment, type: 'text' }));

    await this.setState({
      fragments: fragmentsObject,
      wordcount: completeText.length,
    }, function () {
      console.log('Array de fragmentos enviados para o state: ', this.state);
      console.log('Array de breakpoints enviados para o state: ', this.state.fragments);
      console.log('Tamanho do texto enviado para o state: ', this.state.wordcount);
      // console.log(this.state.)
      // this.props.history.push("/payment",this.state)
    });
    this.send()
  }

  onChange = (e) => {
    this.setState({
      textContent: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <NavBar logged={true} author={true}/>
        <div style={styles.root}>
          <Container>
            <Row style={styles.center}>
              <Col>
                <h3><b>Tradução profissional do texto acadêmico</b></h3>
                <h5>
                  {this.state.fileName}
                  {this.state.fileExtension}
                </h5>
              </Col>
            </Row>
            <br />
            <Row>
              <Col>
                <Form.Group controlId="text">
                  <Form.Label>
                    <h5>
                      <b>
  Título:
                        {this.state.textTitle}
                      </b>
                    </h5>
                  </Form.Label>
                  <p>Clique no texto nos espaços que você deseja criar um ponto de quebra. </p>
                  <p>Cada fragmento do seu texto será traduzido por um único tradutor. </p>
                  <textarea
                    style={styles.textArea}
                    id="my-input"
                    onChange={this.onChange}
                    value={this.state.textContent}
                    onMouseUp={this.onMouseUp}
                  />
                    <Button
                      style={styles.button}
                      onClick={this.removeBreakpoint}
                    >
                          Remover último ponto adicionado
                    </Button>
                </Form.Group>

              </Col>
              <Col>
                <Row>
                  <Col>
                    <h5><b>Revisão do pedido:</b></h5>
                    <h6>
                      <b>Tamanho do texto: </b>
                      {this.state.wordcount}
                      {' '}
  letras
                    </h6>
                    <h6>
                      <b>Número de Pontos de Quebra: </b>
                      {this.state.breakpoints.length}
                      {' '}
  pontos de quebra
                    </h6>
                    <h6>
                      <b>Título do artigo: </b>
                      {this.state.textTitle}
                    </h6>
                    <h6><b>Contexto: </b></h6>
                    <p>
                      {this.state.textContext}
                    </p>

                    <h6><b>Nível de privacidade: </b></h6>
                    <p style={styles.littleText}>Quanto mais pontos de quebra, mais segurança você terá para evitar plágios.</p>

                    <ProgressBar
                      style={styles.progressBar}
                      variant="success"
                      max={100}
                      animated
                      now={calculatePrivacyLevel(this.state.wordcount, this.state.breakpoints.length)}
                    />

                    <Button
                      style={styles.button}
                      onClick={this.sendFragment}
                    >
                          Realizar pagamento
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
        <SimpleFooter/>
      </div>

    );
  }
}

styles = {
  root: {
    fontFamily: 'Raleway',
    padding: 20,
    width: '100%',
  },
  littleText: {
    fontSize: '0.8em',
  },
  textArea: {
    width: '100%',
    height: '50vh',
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
    backgroundColor: green,
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


export default Breakpoints;
