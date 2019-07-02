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
    this.state = {
      trasnlatedText: this.props.location.state.item ,
      open: false,
      user: this.props.location.state.user
    };
    this.logState = () => console.log(this.state.trasnlatedText);
    this.editorRef = React.createRef();
    this.togglePanel = this.togglePanel.bind(this);
  }

  togglePanel(e) {
    this.setState({ open: !this.state.open });
  }

  render() {
    console.log(this.state.trasnlatedText);
    console.log('user', this.state.user);
    
    
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
                        {this.state.trasnlatedText.context}
                    </p>
                </div>
            ) : null
            }
            <hr />
          </div>
          <Row>
              <Col>
                <Form.Group controlId="originalText">
                    <Form.Label style={styles.subTitle}>{this.state.trasnlatedText.title}</Form.Label>
                <Form.Control as="textarea" rows={23} value={this.state.trasnlatedText.translated_text} />
                </Form.Group>
              </Col>
              <Col style={styles.center}>
                <p style={styles.subTitle}>Avalie a Tradução</p>
                <Rater style={styles.stars} total={5} />
                <Link to ={{
                    pathname: "/homepage_author",
                    state: {username: this.state.user}
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
