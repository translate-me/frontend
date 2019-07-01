import React, { Component } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import NavBar from '../Components/NavBar';
import { green } from '../colors';
import SimpleFooter from '../Components/SimpleFooter';

class Payment extends Component{
    constructor(props){
        super(props);
        const oldState = this.props.location.state;
        console.log('state anterior: ', oldState)

        this.state = {
            title: oldState.title,
            fileName: '',
            fileExtension: '',
            textContent: oldState.textContent,
            username: oldState.username,

            complexityLevel: oldState.complexityLevel,
            knowledgeArea: oldState.knowledgeArea,
            textContext: oldState.textContext,
            originLanguage: oldState.originLanguage,
            translateLanguage: oldState.translateLanguage,

            wordcount: oldState.wordcount,
            breakpoints: oldState.breakpoints,
            fragments: oldState.fragments,

            checked: false
        }
    }

    toggleCheckbox(){
        this.setState({checked: !this.state.checked})
    }

    home(){
        this.props.history.push({pathname: '/homepage_author', state: {username: this.state.username}});
    }


    render(){
        return(
            <div style={styles.page}>
                <NavBar logged={true} author={true} />
                    <Row style={styles.myRow}>
                        <Col>
                            <h2>{this.state.title}</h2>
                            <div style={styles.textContent}>

                            <p><b>Contexto: </b>{this.state.textContext}</p>
                            <p><b>Nível de Complexidade: </b>{this.state.complexityLevel.label}</p>
                            <p><b>Área de Conhecimento: </b>{this.state.knowledgeArea.label}</p>
                            <p><b>Lingua de Origem: </b>{this.state.originLanguage.label}</p>
                            <p><b>Lingua de Destino: </b>{this.state.translateLanguage.label}</p>
                            </div>
                        </Col>
                        <Col style={styles.payment}>
                            <h1>Pagamento</h1>
                            <p>
                                Cada fragmento do texto traduzido será feito por um tradutor e revisado por outros tradutores.
                                O preço é calculado em função da quantidade de tradutores necessários para traduzir seu texto,
                                a complexidade da tradução e a quantidade de palavras.
                            </p>
                            <p>
                                Será enviado ao seu email de cadastro o boleto com o valor da tradução.
                            </p>
                            <p><b>Quantidade de Tradutores necessários:</b> {this.state.fragments.length}</p>
                            <p><b>Quantidade de palavras no texto:</b> {this.state.wordcount}</p>
                            <p style={styles.value}>
                                <b>Valor do Tradução:</b>R$ 500,00
                            </p>
                            <b>
                                <Form.Check type="checkbox" checked={this.state.checked} onChange={() => this.toggleCheckbox()} label="Li e concordo com os termos de uso do translate.me" />
                            </b>
                            <Button disabled={!this.state.checked} style={styles.button} onClick={()=> this.home()}>Finalizar pedido de tradução</Button>

                        </Col>
                    </Row>
                    <SimpleFooter/>
            </div>
        );
    }
}

const styles = {
    page:{
        fontFamily: "Raleway"
    },
    myRow:{
        margin: "5%",
        textAlign: "justify"
    },
    payment:{
        color: green
    },
    textContent:{
        fontSize:14
    },
    value:{
        fontSize: 20
    },
    button:{
        marginTop: '5%',
        backgroundColor: green
    }
}

export default Payment;