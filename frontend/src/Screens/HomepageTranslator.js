import React, { Component } from 'react';
import { Card, Button, Container, Row } from 'react-bootstrap';
import NavBar from '../Components/NavBar';
import { white, green, lightgreen } from '../colors';
import Footer from '../Components/Footer';
import Avatar from 'react-avatar';
import StarRatingComponent from 'react-star-rating-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import SimpleFooter from '../Components/AnotherSimpleFooter';
import axios from 'axios';

class HomepageTranslator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            available: [],
            current: [],
            revision: [],
            pageTranslations: 1,
            pageRevisions: 1,
            pageAccept:1,
            translationsPerPage: 3,
            loading: false
        }
        };
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

    componentDidMount(){        
        const available = "http://0.0.0.0:9000/text/api/v0/fragment/list/available_fragments/default1/"
        const current = "http://0.0.0.0:9000/text/api/v0/fragment/list/translator_fragments/default/"
        const revision = "http://0.0.0.0:9000/text/api/v0/fragment/list/translator_fragments/1/"
        const addTranslator = "http://0.0.0.0:9000/text/api/v0/fragment/add_translator/" + 
        axios.get(available)
        .then(res => {
            console.log('success', res.data);
            this.setState({available: res.data})
            axios.get(current)
                .then(res => {
                    console.log('success', res.data);
                    this.setState({ current: res.data, loading: false })
                })
                .catch(err => {
                    console.log('error', err)
                })
        })
        .catch(err => {
            console.log('error', err)
        })
    }

    renderTranslation() {
        const { current, pageTranslations, translationsPerPage } = this.state;
        const indexOfLastTranslations = pageTranslations * translationsPerPage;
        const indexOfFirstTranslations = indexOfLastTranslations - translationsPerPage;
        const currentTranslations = current.slice(indexOfFirstTranslations, indexOfLastTranslations);
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(current.length / translationsPerPage); i++) {
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
                {currentTranslations.map((item, key) => {
                    var frag = item
                    return(
                    <Card style={styles.card} key={key} onClick={() => this.props.history.push("/text_editor", {frag})}>
                        <Card.Title>{item.text.title ? item.text.title : 'Titulo'}</Card.Title>
                        <Card.Subtitle>
                            <p style={styles.prazo}> Prazo:
                            {item.text.deadline ? this.renderDate(item.text.deadline) : 'Indefinido'}
                            </p>
                            <p style={styles.prazo}> Lingua de Origem:
                                {
                                    item.text.language == 1 ? 'Português' :
                                    item.text.language == 2 ? 'Espanhol' :
                                    item.text.language == 3 ? 'Inglês' :
                                    item.text.language }
                            </p>
                            <p style={styles.prazo}> Quantidade de Palavras:
                            {item.total_words ? item.total_words : 'Sem palavras'}
                            </p>
                        </Card.Subtitle>
                        <Card.Body>{this.truncateText(item.text.context)}</Card.Body>
                    </Card>
                )})}
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

    handleClickR(event) {
        const page = Number(event.target.id)
        if (page > 0) {
            this.setState({
                pageRevisions: page
            });
        }
    }

    // renderRevisions() {
    //     const { availableTranslations, pageRevisions, translationsPerPage } = this.state;
    //     const indexOfLastTranslations = pageRevisions * translationsPerPage;
    //     const indexOfFirstTranslations = indexOfLastTranslations - translationsPerPage;
    //     const currentTranslations = availableTranslations.slice(indexOfFirstTranslations, indexOfLastTranslations);
    //     const pageNumbers = [];
    //     for (let i = 1; i <= Math.ceil(availableTranslations.length / translationsPerPage); i++) {
    //         pageNumbers.push(i);
    //     }

    //     return (
    //         <Row style={styles.rowdiv}>
    //             {this.state.pageRevisions > 1 ?
    //                 <FontAwesomeIcon icon={faAngleLeft} style={styles.icon}
    //                     id={this.state.pageRevisions - 1}
    //                     onClick={(e) => this.handleClickR(e)}
    //                 />
    //                 : null
    //             }
    //             {currentTranslations.map((item, key) => (
    //                 <Card style={styles.card} key={key}>
    //                     <Card.Title>{item.title}</Card.Title>
    //                     <Card.Subtitle>
    //                         <p style={styles.prazo}> Prazo:
    //                         {item.prazo}
    //                         </p>
    //                         <p style={styles.prazo}> Lingua de Origem:
    //                         {item.language}
    //                         </p>
    //                     </Card.Subtitle>
    //                     <Card.Body>{this.truncateText(item.text.context)}</Card.Body>
    //                     <Button style={styles.acceptButton} onClick = {() => { if (window.confirm('Deseja realizar esta revisão?')) this.props.history.push("/revision")}} >Fazer a Revisão</Button>
    //                 </Card>
    //             ))}
    //             {this.state.pageRevisions < pageNumbers.length ?
    //                 <FontAwesomeIcon icon={faAngleRight} style={styles.icon}
    //                     id={this.state.pageRevisions + 1}
    //                     onClick={(e) => this.handleClickR(e)}
    //                 />
    //                 : null
    //             }
    //         </Row>
    //     );
    // }
    
    handleAccept(frag){
        const url = 'http://0.0.0.0:9000/text/api/v0/fragment/add_translator/' + frag.id + '/'

        if (window.confirm('Deseja realizar esta tradução?')) {
            axios.patch(url, {
                fragment_translator: 'default'
            })
            .then( () =>
                this.props.history.push("/text_editor", { frag })
            )
            .catch((err) => {
                console.log(err.response)
                window.confirm('Não é possivel trabalhar nessa tradução.')}
            )
        }
    }

    handleClickA(event) {
        const page = Number(event.target.id)
        if (page > 0) {
            this.setState({
                pageAccept: page
            });
        }
    }

    renderDate(d) {
        var data = new Date(d)

        var dia = data.getDate().toString()
        var diaF = (dia.length == 1) ? '0' + dia : dia
        var mes = (data.getMonth() + 1).toString() //+1 pois no getMonth Janeiro começa com zero.
        var mesF = (mes.length == 1) ? '0' + mes : mes
        var anoF = data.getFullYear()
        return diaF + "/" + mesF + "/" + anoF;
    }

    renderAccepts() {
        const { available, pageAccept, translationsPerPage } = this.state;
        const indexOfLastTranslations = pageAccept * translationsPerPage;
        const indexOfFirstTranslations = indexOfLastTranslations - translationsPerPage;
        const availableTranslations = available.slice(indexOfFirstTranslations, indexOfLastTranslations);
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(available.length / translationsPerPage); i++) {
            pageNumbers.push(i);
        }

        return (
            <Row style={styles.rowdiv}>
                {this.state.pageAccept > 1 ?
                    <FontAwesomeIcon icon={faAngleLeft} style={styles.icon}
                        id={this.state.pageAccept - 1}
                        onClick={(e) => this.handleClickA(e)}
                    />
                    : null
                }
                {availableTranslations.map((item, key) => (
                    <Card style={styles.card} key={key}>
                        <Card.Title>{item.text.title ? item.text.title : 'Titulo'}</Card.Title>
                        <Card.Subtitle>
                            <p style={styles.prazo}> Prazo:
                            {item.text.deadline ? this.renderDate(item.text.deadline) : 'Indefinido'}
                            </p>
                            <p style={styles.prazo}> Lingua de Origem:
                                {
                                    item.text.language == 1 ? 'Português' :
                                    item.text.language == 2 ? 'Espanhol' :
                                    item.text.language == 3 ? 'Inglês' :
                                    item.text.language }
                            </p>
                            <p style={styles.prazo}> Quantidade de Palavras:
                            {item.total_words ? item.total_words : 'Sem palavras'}
                            </p>
                        </Card.Subtitle>
                        <Card.Body>{this.truncateText(item.text.context)}</Card.Body>
                        {/* <Button style={styles.acceptButton} onClick={() => this.props.history.push("/text_editor")} >Trabalhar nessa Tradução</Button> */}
                        <Button style={styles.acceptButton} onClick={() => this.handleAccept(item)}> Trabalhar nessa Tradução</Button>
                    </Card>
                ))}
                {this.state.pageAccept < pageNumbers.length ?
                    <FontAwesomeIcon icon={faAngleRight} style={styles.icon}
                        id={this.state.pageAccept + 1}
                        onClick={(e) => this.handleClickA(e)}
                    />
                    : null
                }
            </Row>
        );
    }

    render() {
        console.log('available', this.state.available);
        console.log('current', this.state.current);
        console.log('revisions', this.state.revisions);
        
        return (
            <div style={styles.font}>
                <NavBar logged={true} author={false}/>
                <Container style={styles.profile}>
                    <Row>
                        <Avatar facebookId="100008055554326" round={true} />
                    </Row>
                    <div style={styles.user_name}>
                        <Row>
                            <Container>
                                <h1>User Name</h1>
                                <StarRatingComponent
                                    name="rate2"
                                    editing={false}
                                    renderStarIcon={() => <span>⭐</span>}
                                    starCount={4}
                                    value={8}
                                />
                            </Container>
                        </Row>
                        <Row style={styles.languages}>
                                <ul>
                                    <li>Inglês - Basico</li>
                                    <li>Espanhol - Avançado</li>
                                </ul>
                        </Row>
                    </div>
                </Container>
                <hr/>
                <Container>
                    {this.state.current.length > 0?
                        <div>
                            <h2 style={styles.title}>Suas traduções em andamento</h2>
                            <Row style={{width: '100%'}}>
                                {this.renderTranslation()}
                            </Row>
                            <br/>
                            <br/>
                        </div>
                        :null
                    }
                    {this.state.available.length > 0?
                        <div>
                            <h2 style={styles.title}>Novas Traduções</h2>
                            <Row>
                                {this.renderAccepts()}
                            </Row>
                            <br />
                            <br />
                        </div>
                        : null
                    }
                    {this.state.revision.length > 0?
                        <div>
                            <h2 style={styles.title}>Novas Revisões</h2>
                            {/* <Row>
                                {this.renderRevisions()}
                            </Row> */}
                            <br/>
                            <br/>
                        </div>
                        :null
                    }
                </Container>
                <SimpleFooter/>
            </div>
        );
    }
};
            
const styles = {
    card:{
        margin: "1%",
        width: "30%",
        padding: "1%",
        textAlign: 'justify'
    },
    font:{
        fontFamily:"Raleway"
    },
    buttondiv: {
        textAlign: 'right',
        position: 'relative',
        margin: "10px"
    },
    profile: {
        display: 'flex',
        margin: '1%',
        padding: '1%',
        width: '98%',
        height: '98%',
        fontFamily: "Raleway"
    },
    user_name: {
        fontFamily: 'Raleway',
        display: 'block',
        marginTop: '1%',
        width: '98%',
        height: '98%',
        marginLeft: '5%',
    },
    stars: {
        display: 'flex',
        fontFamily: 'Raleway',
        fontSize: '25px',
    },
  languages: {
        marginLeft: '30%',
        marginTop: '-7.5%',
        display: 'flex'
    },
    amount: {
        width: '100%',
        height: '70%',
        borderStyle: 'solid',
        fontFamily: 'Raleway',
        fontSize: '20px',
        textAlign: 'center',
        marginLeft: '500%',
    },
    button_position_certified: {
        marginLeft: '14%',
        width: '10%',
        height: '10%',
        fontFamily: 'Raleway',
        fontSize: '10px',
        textAlign: 'center',
        borderRadius: '20%',
    },
    button_position_revision:{
        marginLeft: '30%',
        width: '20%',
        height: '20%',
        fontFamily: 'Raleway',
        fontSize: '20px',
        textAlign: 'center',
        borderRadius: '20%',
    },
    button: {
        backgroundColor: '#2B423E',
        borderColor: '#2B423E',
        marginLeft: "20%",
        height: "40px",
        width: "300px"
    },
    title:{
        fontFamily: "Raleway"
    },
    prazo: {
        textAlign: 'right',
        color: green
    },
    icon: {
        fontSize: 30,
        marginTop: "10vh",
        marginRight: 0,
        marginLeft: 0
    },
    acceptButton:{
        backgroundColor: green
    },
    rowdiv:{
        width: '100%'
    }
};
const loren_ipsun = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

export default HomepageTranslator;
