import React from 'react';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import {
  Row, Col, Form 
} from 'react-bootstrap';
import { green } from '../colors';


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


class Revise extends React.Component {
  constructor(props) {
    super(props);
    this.state = { comments: '' };
  }


  render(){
    return(

      <div>  
      <NavBar />
        <div style={styles.root}>
          <h1 style={styles.title}>Revisão do texto: pafaljfnjan</h1>
          <div>
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
                <Form.Control as="textarea" rows={10} value="Lorem ipsum dlq;dlkwq;kr'pq'RPhAJDolor sit amet, consectetur adipiscing elit. Maecenas massa justo, aliquet eu nibh nec, imperdiet maximus nisl. Nunc dapibus, lectus in dapibus euismod, eros ex consequat tellus, vitae placerat orci sem vel leo. Suspendisse varius tortor et elit consectetur euismod. In sit amet finibus metus. Fusce at posuere felis. Maecenas tincidunt pharetra massa. Nullam at lorem nulla. Vivamus consectetur non ligula at interdum. Suspendisse congue, est eu elementum lacinia, felis est tristique purus, nec efficitur orci nunc eget neque. Integer quis aliquet orci, a malesuada libero. Phasellus scelerisque felis et sem rhoncus, eu ultrices augue cursus. " />
              </Form.Group>
      <Row>
      <Col xs={3}>
  <Form.Group controlId="very_good">
    <Form.Check name="quality" type="radio" label="Muito bom" />
  </Form.Group>
  <Form.Group controlId="good">
    <Form.Check name="quality" type="radio" label="Bom" />
  </Form.Group>
  <Form.Group controlId="regular">
    <Form.Check name="quality" type="radio" label="Razoável" />
  </Form.Group>
  <Form.Group controlId="bad">
    <Form.Check name="quality" type="radio" label="Ruim" />
  </Form.Group>
  <Form.Group controlId="too_bad">
    <Form.Check name="quality" type="radio" label="Muito Ruim" />
  </Form.Group>
      </Col>
      <Col>
                    <Form.Group controlId="comments">
                <Form.Label style={styles.boldTitle}>Comentários</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={10}
                  onChange={() => { this.setState({ comments: this.editorRef.value }); }}
                  ref={(ref) => { this.editorRef = ref; }}
                />
              </Form.Group>
      </Col>
      </Row>

            </Col>
          </Row>
          <Row>
            <Col>

            </Col>
          </Row>
        </div>

      <Footer />
      </div>
    )
  }
}

export default Revise;
