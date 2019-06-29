import React, { Component } from 'react';
import { Card, Button, Container, Row } from 'react-bootstrap';
import NavBar from '../Components/NavBar';
import { white, green, lightgreen } from '../colors';
import Footer from '../Components/Footer';
import Avatar from 'react-avatar';
import StarRatingComponent from 'react-star-rating-component';
import { ButtonGroup } from 'reactstrap';
import { ListGroup, ListGroupItem, Table } from 'reactstrap';
import SimpleFooter from '../Components/SimpleFooter';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tradution: [
                'Tradução 1',
                'Tradução 2',
                'Tradução 3',
            ],
        };
    }

    render() {
        return (
            <div>
                <NavBar logged={false} author={false}/>
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
                            <Row>
                                <Button style={styles.button}>Submeter Certificado</Button>
                            </Row>

                            <div style={styles.buttondiv}>

                                <div style={styles.amount}>
                                    <p>R$ 35,80</p>
                                </div> 
                            </div>
                        </Row>
                        <hr/>
                    </div>
                </Container>
            </div>
        );
    }
};
            
            
const styles = {
    buttondiv: {
        textAlign: 'right',
        position: 'relative',
    },
    profile: {
        display: 'flex',
        margin: '1%',
        padding: '1%',
        width: '98%',
        height: '98%',
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
    bottons: {
        display: 'flex',
        margin: '20%',
        padding: '1%',
        width: '90%',
        height: '90%',
        marginLeft: '8%',
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
    list_position: {
        display: 'flex',
        margin: '1%',
        padding: '1%',
        width: '90%',
        height: '90%',
        marginLeft: '5%'
    },
    button_div_translate: {
        backgroundColor: lightgreen,
        alignSelf: 'center',
        display: 'flex',
        flexDirection: 'column',
        padding: '1%',
        width: '20%',
        height: '20%',
    },
    button_div_revisor: {
        marginLeft: '4.5%',
        width: '20%',
        height: '20%',
        backgroundColor: lightgreen,
        alignSelf: 'center',
        display: 'flex',
        flexDirection: 'column',
        padding: '1%',
    },
};
            
export default Profile;
