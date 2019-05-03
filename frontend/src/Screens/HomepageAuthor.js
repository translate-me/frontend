import React, { Component } from 'react';
import NavBar from '../Components/NavBar';
import { Card, Button } from 'react-bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
class HomepageAuthor extends Component {
    constructor(props){
        super(props);
        this.state={
            advantages:[
                "Vantagem\n1",
                "Vantagem\n2",
                "Vantagem\n3",
                "Vantagem\n4"
            ],
            steps:[
                "Faça o upload do seu texto acadêmico aqui",
                "Defina quais são os pontos que cada tradutor pode visualizar",
                "Aguarde a tradução ser completa e revisada",
                "Receba seu texto traduzido e revisado com sucesso!"
            ]
        }
    }
    render_card(name){
        return(
            <Card style={{ backgroundColor: "#E5E5E5" }}>
                <i>{name}</i>
            </Card>
        );
    }
    render() {
        return (
            <div>
                <NavBar/>

                <Card style={{ backgroundColor:"#C4C4C4"}}>
                    <p style={{
                        marginTop: "5%",
                        fontFamily: "Raleway",
                        alignSelf:"center"
                    }}>
                    Traduza seus textos acadêmicos com qualidade, com uma tradução profissional! Agora, fácil assim!
                    </p>
                    <Card style={{
                        backgroundColor: "#F9FBFC",
                        width: "40%",
                        alignSelf: "center",
                        display: "flex",
                        flexDirection: "row",
                        padding:"2%",
                        alignItems: "center",
                        marginBottom: "5%"
                    }}>
                       {this.state.advantages.map((item) => {
                           return(
                           <Card style={{ backgroundColor: "#C4C4C4", margin: "10px", padding: "5px" }}>
                                <i>{item}</i>
                            </Card>)
                       })}
                    </Card>
                    <Button style={{
                        fontFamily: "Raleway",
                        alignSelf: "center",
                        backgroundColor: "#2B423E",
                        marginBottom: "5%"
                        
                    }}>Quero Traduzir Agora</Button>
                </Card>
                <Card style={{
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
                            <div style={{display: "flex",flexDirection: "row",}}>
                                <Card style={{
                                    backgroundColor: "#E5E5E5",
                                    width: "100%",
                                    height: "100px",
                                    borderRadius: 0,
                                    padding: "5px"
                                }}>
                                    <i>{item}</i>
                                    <h1>{i}</h1>
                                </Card>
                                {
                                    item != this.state.steps[3]?
                                        <FontAwesomeIcon style={{margin: "15%", marginTop:"40px"}} icon={faArrowRight} />
                                    :<div/>
                                }
                            </div>
                        )
                    })}
                </Card>
            </div>
        );
    }
}

export default HomepageAuthor;