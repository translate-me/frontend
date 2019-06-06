import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import NavBar from '../Components/NavBar';
import { white, green, lightgreen } from '../colors';
import Footer from '../Components/Footer';
import Avatar from 'react-avatar';
import StarRatingComponent from 'react-star-rating-component';


class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      steps: [
        'Inglês - ',
        'Mandarim - ',
      ],
    };
  }

  render() {
    return (
    <div style={styles.screen}>
        {/* <NavBar logged= {true}/> */}	
			  <div style={styles.avatar}>			
					<Avatar name="Foo Bar" round={true} />
			  </div>
        <div style={styles.username}>
          <p>User Name</p>
        </div>
        <div style={styles.star}>
          <StarRatingComponent 
            name="rate2" 
            editing={false}
            renderStarIcon={() => <span>⭐</span>}
            starCount={5}
            value={8}
          />
        </div>
		  
      <div style={styles.amount}>
			  <Card/>
    	    <Card.Title style={styles.amount_title}>Saldo</Card.Title>
      </div> 

      <div style={styles.button_position}>
        <Button style={styles.button}>Submeter Certificado</Button>
      </div>	
    </div>);
  }
}


const styles = {
  screen: {
    backgroundColor: white,
    display: 'flex',
    flexDirection: 'column',
    // alignText: 'center',
    // alignSelf: 'center',
  },
  avatar: {
    width: '100px',
    height: '100px',
    marginLeft: '1%',
    padding: '1%',
  },
  username: {
    fontFamily: 'Raleway',
    fontSize: '50px',
    marginLeft: '11%',
    marginTop: '-5%'
  },
  star: {
    fontFamily: 'Raleway',
    fontSize: '50px',
    marginLeft: '32%',
    marginTop: '-7%'
  },
  amount: {
    backgroundColor: green,
    margin: '2%',
    marginLeft: '10%',
    padding: '2%',
    width: '10%',
    borderRadius: '20%',
    height: '10%',
  },
  amount_title: {
    fontFamily: 'Raleway',
    fontSize: '20px',
    color: white,
    justifyContent: 'center',
  },
  button_position: {
    margin: '2%',
    marginLeft: '23%',
    padding: '2%',
    marginTop: '-11%',
  },
  button: {
	  fontFamily: 'Raleway',
	  // left: '90px',
	  // top: '70px',
    fontSize: '20px',
    backgroundColor: '#2B423E',
    // marginBottom: '2%',
    width: '15%',
    borderColor: '#2B423E',
    borderRadius: '20%',
    height: '130%',
  },
};

export default Profile;
