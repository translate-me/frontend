import React, { Component } from 'react';
import NavBar from '../Components/NavBar';
import { Card } from 'react-bootstrap';

class HomepageAuthor extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <Card style={{ backgroundColor:"#E5E5E5"}}>
                    <p style={{
                        marginTop: "5%",
                        fontFamily: "Raleway",
                        alignSelf:"center"
                    }}>
                    Traduza seus textos acadêmicos com qualidade, com uma tradução profissional! Agora, fácil assim!
                    </p>
                    <Card style={{ backgroundColor: "#F9FBFC", width: "50%", alignSelf: "center"}}>
                    <p>oie</p>
                    </Card>
                </Card>
            </div>
        );
    }
}

export default HomepageAuthor;