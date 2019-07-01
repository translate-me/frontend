import React, {Component} from 'react';
import { Container, Row, Card, ProgressBar, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faPlusCircle, faShieldAlt } from '@fortawesome/free-solid-svg-icons';
import { green, white, lightgreen } from '../colors';
import NavBar from '../Components/NavBar';
import SimpleFooter from '../Components/SimpleFooter';
import AnotherSimpleFooter from '../Components/AnotherSimpleFooter';
import axios from 'axios';

class FollowTranslation extends Component{
    constructor(props){
        super(props);
        this.state = {
            advantages: [
                {
                    title:'Tradução de Alta Qualidade',
                    body:'Para tradução de textos de alto nível, nós exigimos e verificamos as certificações de nossos tradutores. Além de todos os textos passarem por um processo de revisão'
                },
                {
                    title:'Segurança',
                    body: 'Com a fragmentação do texto garantimos que seu trabalho não possa ser visualizado por completo por nenhum de nossos tradutores.'
                },
                {
                    title:'Prazo',
                    body:'Tempo de entrega e valor da tradução abaixo da média do mercado.'
                },
                {
                    title:'Acompanhamento',
                    body: 'Você pode acompanhar o progresso de suas traduções e se comunicar com os tradutores através de um chat, para retirar possíveis dúvidas.'
                }
            ],
            translationsNotFinished:[],
            translationsFinished:[],
            currentPage: 1,
            translationsPerPage: 2,
            pageTranslations: 1,
            pageRevisions: 1,
            pageAccept:1,
            loading: true
        }
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){
        const url = 'http://0.0.0.0:9000/text/api/v0/text/list/texts_by_author/default'
        axios.get(url)
        .then(res =>{
            console.log(res);
            this.separateTranslations(res.data)
            
        })
        .catch(err => {
            console.log(err.response);
            
        })
    }

    separateTranslations(translations){
        var done =[]
        var notDone = []
        translations.forEach(tr => {
            if (tr["fragments_done"] === tr["total_fragments"]){
                done.push(tr)
            }else{
                notDone.push(tr)
            }
        });
        this.setState({
            translationsNotFinished: notDone,
            translationsFinished: done,
            loading:false
        })
        console.log("done", this.state.translationsFinished);
        console.log("not done", this.state.translationsNotFinished);
        
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
        const { translationsNotFinished, currentPage, translationsPerPage } = this.state;
        const indexOfLastTranslations = currentPage * translationsPerPage;
        const indexOfFirstTranslations = indexOfLastTranslations - translationsPerPage;
        const currentTranslations = translationsNotFinished.slice(indexOfFirstTranslations, indexOfLastTranslations);
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(translationsNotFinished.length / translationsPerPage); i++) {
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
                    <Card style={styles.card} key={key}>
                        <Card.Title>
                            <ProgressBar striped variant="success" now={(item["fragments_done"] * 100) / item["total_fragments"]} />
                        </Card.Title>
                        <Card.Subtitle style={styles.prazo}>Idioma: {this.getLanguage(item.language)}</Card.Subtitle>
                        <Card.Body>{this.truncateText(item.context)}</Card.Body>
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
    newText(){
        let path = `/text_submission`;
        this.props.history.push(path);
    }

    truncateText(text) {
        if (text.length > 200) {
            return text.substring(0, 197) + "..."
        }
        return text
    }

    handleClickT(event) {
        const page = Number(event.target.id)
        if (page > 0) {
            this.setState({
                pageTranslations: page
            });
        }
    }
    getLanguage(num) {
        if (num === 1) {
            return "Português"
        } else if (num === 2) {
            return "Espanhol"
        } else {
            return "Inglês"
        }
    }

    renderFinishedTranslation() {
        const { translationsFinished, pageTranslations, translationsPerPage } = this.state;
        const indexOfLastTranslations = pageTranslations * translationsPerPage;
        const indexOfFirstTranslations = indexOfLastTranslations - translationsPerPage;
        const finishedTranslations = translationsFinished.slice(indexOfFirstTranslations, indexOfLastTranslations);
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(translationsFinished.length / translationsPerPage); i++) {
            pageNumbers.push(i);
        }

        return (
            <Row style={styles.rowdiv}>
                {this.state.pageTranslations > 1 ?
                    <FontAwesomeIcon icon={faAngleLeft} style={styles.icon}
                        id={this.state.pageTranslations - 1}
                        onClick={(e) => this.handleClickT(e)}
                    />
                    : null
                }
                {finishedTranslations.map((item, key) => (
                    <Card style={styles.card} key={key} onClick={() => this.props.history.push("/finished_text")}>
                        <Card.Subtitle style={styles.prazo}>Idioma: {this.getLanguage(item.language)}</Card.Subtitle>
                        <Card.Body>{this.truncateText(item.context)}</Card.Body>
                    </Card>
                ))}
                {this.state.pageTranslations < pageNumbers.length ?
                    <FontAwesomeIcon icon={faAngleRight} style={styles.icon}
                        id={this.state.pageTranslations + 1}
                        onClick={(e) => this.handleClickT(e)}
                    />
                    : null
                }
            </Row>
        );
    }


    render(){
        const { advantages } = this.state;

        return(
            <div style={styles.root}>
                <NavBar logged={true} author={true}/>
                {this.state.loading? null
                :
                
                <div>
                <div style={styles.textdiv}>
                    <p style={styles.title}>Tradução Simples, Rápida e de Qualidade - TranslateMe</p>
                </div>
                <div style={styles.advantages_square}>
                    {advantages.map(item => (
                    <Card style={styles.advantages_card}>
                        <Card.Title style={styles.advantages_title}>
                            {item.title}
                        </Card.Title>
                        <Card.Body style={styles.advantages_body}>
                            {item.body}
                        </Card.Body>
                    </Card>
                    ))}
                </div>
                <div style={styles.buttondiv}>
                    <Button variant="primary" style={styles.button} onClick={() => { this.newText(); }}>
                        <FontAwesomeIcon icon={faPlusCircle} style={styles.buttonicon} />
                        Submeter um Novo Texto 
                    </Button>
                </div>
                <Container>
                    {this.state.translationsNotFinished.length>0?
                    <div>
                        <div style={styles.textdiv}>
                            <p style={styles.title}>Traduções em Andamento</p>
                        </div>
                        {this.renderTranslation()}
                        <br/>
                        <br/>
                    </div>
                    :null
                }
                    {this.state.translationsFinished.length>0?
                        <div>
                            <div style={styles.textdiv}>
                                <p style={styles.title}>Traduções Concluídas</p>
                            </div>
                            {this.renderFinishedTranslation()}
                        <br/>
                        </div>
                    :null
                    }
                </Container>
                </div>
                }
                <AnotherSimpleFooter/>
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
        marginTop: '1vh',
        marginBottom: '3vh',
        width: '25%',
        alignSelf: 'center'
    },
    buttonicon:{
        marginRight: 10
    },
    prazo:{
        textAlign: 'right',
        color: green
    },
    advantages_square: {
        backgroundColor: lightgreen,
        alignSelf: 'center',
        display: 'flex',
        padding: '2%',
        marginBottom: '2%',
        marginTop: '2%'
    },
    advantages_card: {
        backgroundColor: green,
        margin: '2%',
        padding: '2%',
        width: '100%',
    },
    advantages_title: {
        textAlign: 'center',
        fontFamily: 'Raleway',
        fontSize: '20px',
        color: white,
    },
    advantages_body: {
        textAlign: 'center',
        fontFamily: 'Raleway',
        fontSize: '15px',
        color: white,
    }

}
