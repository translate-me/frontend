import React, {Component} from 'react';
import { Container, Row, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

import NavBar from '../Components/NavBar';

const loren_ipsun = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

class FollowTranslation extends Component{
    constructor(props){
        super(props);
        this.state = {
            translations: [
                {
                    title: "Translation 1",
                    context: loren_ipsun
                },
                {
                    title: "Translation 2",
                    context: loren_ipsun
                },
                {
                    title: "Translation 3",
                    context: loren_ipsun
                },
                {
                    title: "Translation 4",
                    context: loren_ipsun
                },
                {
                    title: "Translation 5",
                    context: loren_ipsun
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
            <Row style={{marginLeft: 10}}>
                {
                    this.state.currentPage > 1?
                    <FontAwesomeIcon icon={faAngleLeft} style={styles.icon}
                            id={this.state.currentPage - 1 }
                            onClick={this.handleClick}
                    />
                    :
                    null
                }
                {
                    currentTranslations.map((item, key) => (
                        <Card style={styles.card} key={key}>
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Body>{item.context}</Card.Body>
                        </Card>
                    ))
                }
                {
                    this.state.currentPage < pageNumbers.length?
                        <FontAwesomeIcon icon={faAngleRight} style={styles.icon}
                            id={this.state.currentPage + 1}
                            onClick={this.handleClick}
                        />
                        :
                        null
                }
            </Row>
        );

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
                </Container>
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
        marginTop: "20vh"
    },
    title:{
        fontSize: 30,
        alignSelf: 'center'
    },
    textdiv:{
        textAlign: 'center',
        marginTop: 50
    }

}
