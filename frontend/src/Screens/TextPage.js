import React,{Component} from 'react';
import { Button, Container, Row, Col, Form, ProgressBar} from 'react-bootstrap';
import NavBar from '../Components/NavBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArchive, faAngleDown, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { green } from '../colors';

class TextPage extends Component{
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
    error(){
        return(
            <div style={styles.error}>
                <div>
                    <h1>Desculpe. Não encontramos o seu texto...</h1>
                    <Button variant="primary" style={styles.button}
                        onClick={() => { this.props.history.push('/follow_translations')}}
                    >
                        <FontAwesomeIcon icon={faArchive} style={styles.buttonicon} />
                        Ver Todos os Textos Submetidos
                    </Button>
                </div>
            </div>
        )
    }

    renderText(){
        return(
                <div style={styles.root}>
                    <div>
                        <div>
                            <div style= {styles.two_columns} onClick={e => this.togglePanel(e)}>
                                <p style={styles.title}>{this.props.location.text.title}</p>
                                <FontAwesomeIcon icon={faAngleDown} style={styles.icon} />
                                {
                                this.props.location.text.progress == 100?
                                    <div style= { styles.two_columns_check }>

                                    <p style={styles.concluido}>Concluído</p>
                                        <FontAwesomeIcon icon={faCheckCircle} style={styles.icon2} />
                                </div>

                                : null
                                }
                            </div>
                        </div>
                        {
                            this.state.open ? (
                                <div>
                                    <p style={styles.context}><b>Contexto: </b>{this.props.location.text.context}</p>
                                </div>
                            ) : null
                        }
                        <hr />
                    </div>
                    <Row>
                        <Col>
                            <Form.Group controlId="originalText">
                                <Form.Label style={styles.boldTitle}>Texto Original</Form.Label>
                            <Form.Control as="textarea" rows={23} value={this.props.location.text.text} />
                            </Form.Group>
                        </Col>
                        <Col>
                        {
                            this.props.location.text.progress == 100?
                            this.translation()
                            :
                            this.wait()

                        }

                        </Col>
                    </Row>
                </div>
        )
    }

    translation(){
        return(
            <Form.Group controlId="originalText">
                <Form.Label style={styles.boldTitle}>Texto Traduzido</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={23}
                    value={this.props.location.text.translation}
                />
            </Form.Group>
        )
    }

    wait(){
        return(
            <h1>wait</h1>
        )
    }

    render(){
        return(
            <div style={styles.page}>
                <NavBar logged={true} author={true} />
                {
                    this.props.location.text != undefined?
                    this.renderText()
                    :
                    this.error()
                }

            </div>
        )
    }
}

const styles={
    page:{
        fontFamily: 'Raleway'
    },
    error:{
        display: 'grid',
        placeItems: 'center',
        height: '80vh'
    },
    button: {
        backgroundColor: green,
        borderColor: green,
        width: '40%',
        alignSelf: 'center',
        marginTop: '5vh',
        marginLeft: '30%',
        marginRight: '30%',
    },
    buttonicon: {
        marginRight: 10
    },
    title: {
        fontSize: 25,
        marginRight: '2%',
    },
    two_columns: {
        display: 'flex', flexDirection: 'row',
    },
    two_columns_check: {
        position: 'relative',
        textAlign: 'right',
        display: 'flex',
    },
    icon: {
        marginTop: 5,
        fontSize: 30,
        color: green,
    },
    concluido: {
        fontSize: 25,
        marginRight: '2%',
        marginLeft: '10%',
        color:green
    },
    icon2: {
        marginTop: 5,
        fontSize: 25,
        color: green,
    },
    root: {
        padding: 20,
        width: '100%'
    }

}

export default TextPage;