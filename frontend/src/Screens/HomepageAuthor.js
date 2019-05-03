import React, { Component } from 'react';
import NavBar from '../Components/NavBar';
import { Card, Button } from 'react-bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faCartArrowDown } from '@fortawesome/free-solid-svg-icons'

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
    render_step(item){
        if (item !== this.state.steps[3]) {
            return (
                <FontAwesomeIcon style={{ margin: "15%", marginTop: "40px" }} icon={faArrowRight} />
            );
        }
    }

    render() {
        return (
            <div>
                <NavBar/>

                <div style={{ backgroundColor: "#C4C4C4", 
                    display: "flex",
                    flexDirection: "column",
                    alignText: "center",
                    alignSelf: "center"
                }}>
                    <p style={{
                        marginTop: "10%",
                        fontFamily: "Raleway",
                        textAlign: "center",
                        padding: "5px",
                        fontSize: "35px",
                        marginLeft:"10%",
                        marginRight: "10%"
                    }}>
                        Traduza seus textos acadêmicos com qualidade, com uma tradução profissional! Agora, fácil assim!
                    </p>
                    <div style={{
                        backgroundColor: "#E5E5E5",
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
                                    backgroundColor: "#C4C4C4", margin: "2%", padding: "2%", width: "100%"}}>
                                    <Card.Title style={{ fontFamily: "Raleway", fontSize: "20px"}}>{item}</Card.Title>
                                </Card>)
                        })}
                    </div>
                    <Button style={{
                        fontFamily: "Raleway",
                        alignSelf: "center",
                        backgroundColor: "#2B423E",
                        marginBottom: "5%",
                        borderColor: "#2B423E"
                        
                    }}>Quero Traduzir Agora!</Button>
                </div>
                <div style={{
                    backgroundColor: "#C4C4C4",
                    marginTop: "2%",
                    alignSelf: "center",
                    display: "flex",
                    flexDirection: "row",
                    padding: "2%",
                    alignItems: "center",
                }}>
                    {this.state.steps.map((item, i)=>{
                        return(
                            <div key={i} style={{display: "flex",flexDirection: "collumn"}}>
                                <Card style={{
                                    backgroundColor: "#E5E5E5",
                                    width: "100%",
                                    height: "100%",
                                    borderRadius: 0,
                                    padding: "5px",
                                    alignItems: "center"
                                }}>
                                    <Card.Title style={{ fontFamily: "Raleway", textAlign: "center",margin: "5px"}}>{item}</Card.Title>
                                    <Card.Body>
                                        <div style={{
                                            backgroundColor: "#C4C4C4",
                                            border: "1px",
                                            borderRadius: "100%",
                                            height: "30px",
                                            width: "30px",
                                            textAlign: "center"}}>
                                            <p>{i+1}</p>
                                        </div>
                                    </Card.Body>
                                </Card>

                                
                                    {/* <FontAwesomeIcon style={{margin: "15%", marginTop:"40px"}} icon={faArrowRight} /> */}
                                    
                            </div>
                        )
                    })}
                </div>                
            </div>
        );
    }
}

export default HomepageAuthor;
