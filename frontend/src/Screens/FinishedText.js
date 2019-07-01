import React from 'react';
import {
  Row, Col, Form, Button,
} from 'react-bootstrap';
import { Link } from "react-router-dom"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import NavBar from '../Components/NavBar';
import { green, lightgreen } from '../colors';
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'

class FinishedText extends React.Component {
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

  render() {
    return (
      <div>
        <NavBar logged={true} author={true} />
        <div style={styles.root}>
          <div>
            <div>
              <Row>
                  <div style={styles.two_columns} onClick={e => this.togglePanel(e)}>
                    <p style={styles.title}>Título</p>
                    <FontAwesomeIcon icon={faAngleDown} style={styles.icon} />
                  </div>
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
                    <Form.Label style={styles.subTitle}>Texto Traduzido</Form.Label>
                    <Form.Control as="textarea" rows={23} value="Lorem ipsum dlq;dlkwq;kr'pq'RPhAJDolor sit amet, consectetur adipiscing elit. Maecenas massa justo, aliquet eu nibh nec, imperdiet maximus nisl. Nunc dapibus, lectus in dapibus euismod, eros ex consequat tellus, vitae placerat orci sem vel leo. Suspendisse varius tortor et elit consectetur euismod. In sit amet finibus metus. Fusce at posuere felis. Maecenas tincidunt pharetra massa. Nullam at lorem nulla. Vivamus consectetur non ligula at interdum. Suspendisse congue, est eu elementum lacinia, felis est tristique purus, nec efficitur orci nunc eget neque. Integer quis aliquet orci, a malesuada libero. Phasellus scelerisque felis et sem rhoncus, eu ultrices augue cursus. " />
                </Form.Group>
              </Col>
              <Col style={styles.center}>
                <p style={styles.subTitle}>Avalie a Tradução</p>
                <Rater style={styles.stars} total={5} />
                <Link to ={{
                    pathname: "/homepage_author",
                }} >
                    <Button style={styles.button}> Avaliar </Button>
                </Link>
              </Col>
          </Row>
        </div>
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
  button: {
    fontFamily: 'Raleway',
    backgroundColor: green,
    borderColor: green,
    marginTop: '2vh',
  },
  center: {
    textAlign: 'center',
  },
  right: {
    textAlign: 'right',
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
  colapse: {
    borderBottom: 1,
    borderColor: green,

  },
  boldTitle: {
    fontWeight: 'bold',
  },
  icon: {
    marginTop: 5,
    fontSize: 30,
    color: green,
  },
  stars: {
      fontSize: '10vh',
      display: 'inherit',
      textAlign: 'center',
      reactRaterHover: lightgreen,
      reactRaterActive: green
  },
  subTitle: {
    fontSize: 25,
    fontFamily: 'Raleway',
    textAlign: 'center',
    fontWeight: 'bold',
  },
};

export default FinishedText;
