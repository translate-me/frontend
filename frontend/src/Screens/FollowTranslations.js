import React, {Component} from 'react';
import { Container, Row, Card, ProgressBar, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { green } from '../colors';
import NavBar from '../Components/NavBar';
import SimpleFooter from '../Components/SimpleFooter';

const loren_ipsun = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

class FollowTranslation extends Component{
    constructor(props){
        super(props);
        this.state = {
            translations: [
                {
                    title: "Translation 1",
                    context: 'T1 ' + loren_ipsun,
                    progress: 20,
                    prazo: "20/06/2019",
                    text: loren_ipsun,
                    trasnlation: loren_ipsun
                },
                {
                    title: "Translation 2",
                    context: 'T2 ' + loren_ipsun,
                    progress: 100,
                    prazo: "15/07/2019",
                    text: loren_ipsun,
                    translation: loren_ipsun

                },
                {
                    title: "Translation 3",
                    context: 'T3 ' + loren_ipsun,
                    progress: 50,
                    prazo: "30/06/2019",
                    text: loren_ipsun,
                    translation: loren_ipsun

                },
                {
                    title: "Translation 4",
                    context: 'T4 ' + loren_ipsun,
                    progress: 40,
                    prazo: "04/07/2019",
                    text: loren_ipsun,
                    translation: loren_ipsun

                },
                {
                    title: "Translation 5",
                    context: 'T5 ' + loren_ipsun,
                    progress:10,
                    prazo: "30/07/2019",
                    text: loren_ipsun,
                    translation: loren_ipsun

                },
            ],
            currentPage: 1,
            translationsPerPage: 2
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        const page = Number(event.target.id)
        if(page > 0 ){
            this.setState({
                currentPage: page
            });
        }        
        console.log(page);
        console.log(this.state.currentPage);
    }

    renderTranslation(){
        const { translations, currentPage, translationsPerPage } = this.state;
        const indexOfLastTranslations = currentPage * translationsPerPage;
        const indexOfFirstTranslations = indexOfLastTranslations - translationsPerPage;
        const currentTranslations = translations.slice(indexOfFirstTranslations, indexOfLastTranslations);
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(translations.length / translationsPerPage); i++) {
            pageNumbers.push(i);
        }

        return(
            <Row style={styles.rowdiv}>
                {this.state.currentPage > 1?
                    <FontAwesomeIcon icon={faAngleLeft} style={styles.icon}
                            id={this.state.currentPage - 1 }
                            onClick={this.handleClick}
                    />
                    :null
                }
                {currentTranslations.map((item, key) => (
                    <Card style={styles.card} key={key} onClick={() => this.goToText(item)}>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Subtitle>
                            <p style={styles.prazo}> Prazo: 
                            {item.prazo}
                            </p>
                            <ProgressBar striped variant="success" now={item.progress}/>
                        </Card.Subtitle>
                        <Card.Body>{item.context}</Card.Body>
                    </Card>
                ))}
                {this.state.currentPage < pageNumbers.length?
                    <FontAwesomeIcon icon={faAngleRight} style={styles.icon}
                        id={this.state.currentPage + 1}
                        onClick={this.handleClick}
                    />
                    :null
                }
            </Row>
        );
    }

    goToText(item){
        let path = '/text_page'        
        this.props.history.push({pathname: path, text: item})
    }

    newText(){
        let path = `/text_submission`;
        this.props.history.push(path);
    }

    render(){
        return(
            <div style={styles.root}>
                <NavBar logged={true} author={true}/>
                <Container>
                    <div style={styles.textdiv}>
                        <p style={styles.title}>Traduções em Andamento</p>
                    </div>
                    {this.renderTranslation()}
                    <div style={styles.buttondiv}>
                    <Button variant="primary" style={styles.button} onClick={() => { this.newText(); }}>
                        <FontAwesomeIcon icon={faPlusCircle} style={styles.buttonicon} />
                        Submeter um Novo Texto 
                     </Button>
                    </div>
                </Container>
                <SimpleFooter/>
            </div>
        );
    }
}

export default FollowTranslation;

const styles = {
    root:{
        fontFamily: 'Raleway'
    },
    card:{
        width: "40%",
        margin: 20,
        padding: 10
    },
    icon:{
        fontSize: 50,
        marginTop: "20vh",
        marginRight: 10,
        marginLeft: 10
    },
    title:{
        fontSize: 30,
        alignSelf: 'center'
    },
    textdiv:{
        textAlign: 'center',
        marginTop: 50
    },
    buttondiv:{
        display: 'flex',
        justifyContent: 'center'
    },
    rowdiv:{
        display: 'flex',
        justifyContent: 'center'
    },
    button: {
        backgroundColor: green,
        borderColor: green,
        marginTop: '10vh',
        width: '25%',
        alignSelf: 'center'
    },
    buttonicon:{
        marginRight: 10
    },
    prazo:{
        textAlign: 'right',
        color: green
    }

}
