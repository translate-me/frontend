import React, { Component } from 'react';
import NavBar from '../Components/NavBar';
import { Card, Button } from 'react-bootstrap';
import { white, green, lightgreen } from '../colors'
import Footer from '../Components/Footer'

class HomepageAuthor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            advantages: [
                "Vantagem 1",
                "Vantagem 2",
                "Vantagem 3",
                "Vantagem 4"
            ],
            steps: [
                "Faça o upload do seu texto acadêmico aqui",
                "Defina quais são os pontos que cada tradutor pode visualizar",
                "Aguarde a tradução ser completa e revisada",
                "Receba seu texto traduzido e revisado com sucesso!"
            ]
        }
    }

    render() {
        return (
            <div style={{
                backgroundColor: white,
                display: "flex",
                flexDirection: "column",
                alignText: "center",
                alignSelf: "center"
            }}>
                <NavBar />
                    <p style={{
                        marginTop: "10%",
                        fontFamily: "Raleway",
                        textAlign: "center",
                        padding: "5px",
                        fontSize: "35px",
                        marginLeft: "10%",
                        marginRight: "10%"
                    }}>
                        Traduza seus textos acadêmicos com qualidade, com uma tradução profissional! Agora, fácil assim!
                    </p>
                    <div style={{
                        borderColor: green,
                        borderStyle: "solid",
                        alignSelf: "center",
                        display: "flex",
                        padding: "2%",
                        marginBottom: "5%",
                        borderRadius: "10px",
                        width: "50%"
                    }}>
                        {this.state.advantages.map((item, i) => {
                            return (
                                <Card key={i} style={{
                                    backgroundColor: green,
                                    margin: "2%",
                                    padding: "2%",
                                    width: "100%"
                                }}>
                                    <Card.Title style={{
                                        fontFamily: "Raleway",
                                        fontSize: "20px",
                                        color: white,
                                        justifyContent: "center",
                                    }}>{item}</Card.Title>
                                </Card>)
                        })}
                    </div>
                    <Button style={{
                        fontFamily: "Raleway",
                        fontSize: "20px",
                        alignSelf: "center",
                        backgroundColor: "#2B423E",
                        marginBottom: "5%",
                        width: "30%",
                        borderColor: "#2B423E"

                    }}>Quero Traduzir Agora!</Button>

                <div style={{
                    backgroundColor: lightgreen,
                    marginTop: "2%",
                    alignSelf: "center",
                    display: "flex",
                    flexDirection: "row",
                    padding: "2%",
                    alignItems: "center",
                }}>
                    {this.state.steps.map((item, i) => {
                        return (
                            <div key={i} style={{ display: "flex", flexDirection: "collumn" }}>
                                <Card style={{
                                    borderColor: green,
                                    borderStyle: "solid",
                                    backgroundColor: white,
                                    width: "100%",
                                    height: "100%",
                                    borderRadius: 0,
                                    padding: "5px",
                                    alignItems: "center",
                                    margin: "5px"
                                }}>
                                    <Card.Title style={{
                                        fontFamily: "Raleway",
                                        textAlign: "center",
                                        margin: "5px"
                                    }}>{item}
                                    </Card.Title>
                                    <Card.Body>
                                        <div style={{
                                            border: "1px",
                                            borderRadius: "100%",
                                            borderStyle: "solid",
                                            height: "30px",
                                            width: "30px",
                                            textAlign: "center",
                                            backgroundColor: lightgreen
                                        }}>
                                            <p style={{color: white}}>{i + 1}</p>
                                        </div>
                                    </Card.Body>
                                </Card>


                                {/* <FontAwesomeIcon style={{margin: "15%", marginTop:"40px"}} icon={faArrowRight} /> */}

                            </div>
                        )
                    })}
                </div>
                <Footer/>
            </div>
            
        );
    }
}

export default HomepageAuthor;

