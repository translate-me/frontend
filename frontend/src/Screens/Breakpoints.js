import React from 'react';
import {
  Container, Row, Col, Form, Button, ProgressBar,
} from 'react-bootstrap';
import NavBar from '../Components/NavBar';
import { green } from '../colors';
import { sortArrayOfNumbers, calculatePrivacyLevel } from '../Util/util';

const breakpoints = [];
let styles;

export class Breakpoints extends React.Component {
  constructor(props) {
    super(props);
    // must get the previous state from previous screen on user flux, actual values are placeholders
    this.state = {
      textTitle: 'Lorem ipsum dolor sit amet',
      fileName: 'arquivo',
      fileExtension: '.odt',
      textBody: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacinia nibh ut arcu dignissim malesuada. Cras fermentum cursus augue vitae. ',
      textContext: 'Quisque egestas, leo sit amet porttitor vulputate, elit magna tempor enim, suscipit tempus sapien ipsum quis metus. In posuere pretium ullamcorper. Nam venenatis lorem ac dictum ultricies.',
      wordcount: 0,
      breakpoints: [],
      fragments: [],
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

    const array = Array.from(text);
    array[position - 2] = `${array[position - 2]}🔴`;
    // console.log('array: ', array)

    const newArray = array.join('');
    // console.log('newArray: ', newArray)

    this.setState({
      textBody: newArray,
      breakpoints: breakpoints,
      wordcount: e.target.value.length,
    });
  };

  removeBreakpoint = () => {
    const index = breakpoints.pop();
    console.log(index)

    const array = Array.from(this.state.textBody);

    console.log('array ', array)
    array[index - 1] = ''

    const newArray = array.join('');

    this.setState({
      textBody: newArray
    })    
  }

  sendFragment = () => {
    const completeText = this.state.textBody;
    const fragments = completeText.split('🔴');

    const fragmentsObject = fragments.map(fragment => ({ body: fragment, type: 'text' }));

    this.setState({
      fragments: fragmentsObject,
      wordcount: completeText.length,
    }, function () {
      console.log('Array de fragmentos enviados para o state: ', this.state);
      console.log('Array de breakpoints enviados para o state: ', this.state.breakpoints);
      console.log('Tamanho do texto enviado para o state: ', this.state.wordcount);
    });
  }

  onChange = (e) => {
    this.setState({
      textBody: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <NavBar logged={true} author={false}/>
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
                    value={this.state.textBody}
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
