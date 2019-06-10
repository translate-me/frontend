import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import NavBar from '../Components/NavBar';
import { white, green, lightgreen } from '../colors';
import Footer from '../Components/Footer';
import Avatar from 'react-avatar';
import StarRatingComponent from 'react-star-rating-component';
import { ButtonGroup } from 'reactstrap';
import { ListGroup, ListGroupItem, Table } from 'reactstrap';

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
        <div style={styles.profile}>
          <Avatar facebookId="100008343750912" round={true} />
          <div style={styles.user_name}>
            <h1 fontFamily='Raleway' >User Name</h1>
            <div style={styles.stars}>
              <StarRatingComponent 
                name="rate2" 
                editing={false}
                renderStarIcon={() => <span>⭐</span>}
                starCount={4}
                value={8}
              />
            </div>
            <div style={styles.languages}>
              <ul>
                <li>Inglês - Basico</li>
                <li>Espanhol - Avançado</li>
              </ul>
            </div>  
          </div>
        </div>
        <hr/>


        <div style={styles.bottons}>
          <div style={styles.amount}>
            <p>R$ 35,80</p>
          </div> 

          <div style={styles.button_position_certified}>
            <Button style={styles.button}>Submeter Certificado</Button>
          </div> 

          <div style={styles.button_position_revision}>
            <Button style={styles.button}>Revisões</Button>
          </div>    
        </div>

        <div style={styles.list_position}>
          <div style={styles.button_div_translate}>
            <p>Traduções em Andamento</p>
            <ListGroup>
              <ListGroupItem tag="a" href="#">Cras justo odio</ListGroupItem>
              <ListGroupItem tag="a" href="#">Dapibus ac facilisis in</ListGroupItem>
              <ListGroupItem tag="a" href="#">Morbi leo risus</ListGroupItem>
            </ListGroup>
          </div>
          <div style={styles.button_div_revisor}>
            <p>Revisar novos textos</p>
              <ListGroup>
                <ListGroupItem tag="a" href="#">Cras justo odio</ListGroupItem>
                <ListGroupItem tag="a" href="#">Dapibus ac facilisis in</ListGroupItem>
                <ListGroupItem tag="a" href="#">Morbi leo risus</ListGroupItem>
              </ListGroup>
          </div>
        </div>
      </div>
    )
  }


}


const styles = {
  profile: {
    // backgroundColor: green,
    display: 'flex',
    margin: '1%',
    padding: '1%',
    width: '98%',
    height: '98%',
  },
  user_name: {
    fontFamily: 'Raleway',
    // backgroundColor: lightgreen,
    display: 'block',
    marginTop: '1%',
    width: '98%',
    height: '98%',
    marginLeft: '1%',
    // padding: '1%',
  },
  stars: {
    display: 'flex',
    // marginTop: '1%',
    fontFamily: 'Raleway',
    fontSize: '25px',
    // width: '10%',
    // marginLeft: '2%',
    // margin: '2%',
    // padding: '1%',
  },
  languages: {
    marginLeft: '20%',
    marginTop: '-7.5%',
    width: '20%',
    height: '20%',
    display: 'flex'
  },
  bottons: {
    // backgroundColor: green,
    display: 'flex',
    margin: '1%',
    padding: '1%',
    width: '90%',
    height: '90%',
    marginLeft: '8%',
  },
  amount: {
    // backgroundColor: lightgreen,
    // margin: '2%',
    // marginLeft: '10%',
    // padding: '2%',
    width: '10%',
    // borderRadius: '20%',
    height: '10%',
    borderStyle: 'solid',
    fontFamily: 'Raleway',
    fontSize: '20px',
    textAlign: 'center',
    marginLeft: '2%',
  },
  button_position_certified: {
    // margin: '2%',
    marginLeft: '14%',
    width: '10%',
    height: '10%',
    fontFamily: 'Raleway',
    fontSize: '10px',
    textAlign: 'center',
    borderRadius: '20%',
    // padding: '2%',
    // marginTop: '-11%',
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
    borderColor: '#2B423E'
  },
  list_position: {
    // backgroundColor: lightgreen,
    display: 'flex',
    margin: '1%',
    padding: '1%',
    width: '90%',
    height: '90%',
    marginLeft: '5%'
  },
  button_div_translate: {
    backgroundColor: lightgreen,
    // marginTop: '2%',
    alignSelf: 'center',
    display: 'flex',
    flexDirection: 'column',
    padding: '1%',
    // alignItems: 'center',
    // marginRight: '75%'
    width: '20%',
    height: '20%',
  },
  button_div_revisor: {
    marginLeft: '4.5%',
    width: '20%',
    height: '20%',
    backgroundColor: lightgreen,
    // marginTop: '-15.9%',
    alignSelf: 'center',
    display: 'flex',
    flexDirection: 'column',
    padding: '1%',
    // alignItems: 'center',
    // marginRight: '35%'
  },
};

export default Profile;
