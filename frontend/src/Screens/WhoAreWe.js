import React, { Component } from 'react';
import { Form, Button, Alert, Container, Row } from 'react-bootstrap';
import axios from 'axios';
import { green, lightgreen } from '../colors';
import SimpleFooter from '../Components/SimpleFooter';
import NavBar from '../Components/NavBar';

class WhoAreWe extends Component {
  render() {
    return(
      <div style = {styles.page}>
    <NavBar logged = {false}/>
    <Container>
      <h1 style = {styles.titleText}> Quem somos nós </h1>
        <p1 style = {styles.introduction}> A equipe do translate.me é composta por desenvolvedores da Universidade de Brasília, faculdade do Gama (UnB - FGA).
        Contendo dez pessoas, a equipe possui experiência com softwares desenvolvidos em projetos universitários e extra-curriculares e
        tem como intuito utilizar do conhecimento em programação para ajudar a comunidade acadêmica da melhor maneira possível.
        Assim nasceu o translate.me: uma plataforma ideal para a tradução de textos.
         </p1>
         <h1 style = {styles.meetUs}> Conheça os integrantes </h1>
         <Row>
         <div style = {styles.organizePhotos}>
         <h5> Alexandre Miguel </h5>
         <img src = 'https://avatars3.githubusercontent.com/u/37146204?v=4'style = {styles.photos}/>
         </div>
         <div  style = {styles.organizePhotos}>
         <h5> Davi Alves </h5>
         <img src = 'https://avatars3.githubusercontent.com/u/34287081?v=4'style = {styles.photos}/>
         </div>
         <div  style = {styles.organizePhotos}>
         <h5> Gabriela Guedes </h5>
         <img src = 'https://avatars2.githubusercontent.com/u/31254028?v=4'style = {styles.photos}/>
         </div>
         <div  style = {styles.organizePhotos}>
         <h5> Helena Goulart </h5>
         <img src='https://avatars3.githubusercontent.com/u/32117137?v=4' style = {styles.photos}/>
         </div>
         <div style = {styles.organizePhotos}>
         <h5> João Robson </h5>
         <img src = 'https://avatars3.githubusercontent.com/u/26315903?v=4' style = {styles.photos}/>
         </div>
         <div style = {styles.organizePhotos}>
         <h5> Letícia Meneses </h5>
         <img src = 'https://avatars3.githubusercontent.com/u/30835147?v=4'style = {styles.photos}/>
         </div>
         <div style = {styles.organizePhotos}>
         <h5> Luiz Guilherme </h5>
         <img src = 'https://avatars0.githubusercontent.com/u/17030084?v=4'style = {styles.photos}/>
         </div>
         <div style = {styles.organizePhotos}>
         <h5> Renan Shadt </h5>
         <img src = 'https://avatars1.githubusercontent.com/u/26857903?v=4'style = {styles.photos}/>
         </div>
         <div style = {styles.organizePhotos}>
         <h5> Rômulo Souza </h5>
         <img src = 'https://avatars0.githubusercontent.com/u/36862070?v=4'style = {styles.photos}/>
         </div>
         <div style = {styles.organizePhotos}>
         <h5> Victor Hugo </h5>
         <img src = 'https://avatars0.githubusercontent.com/u/31368363?v=4'style = {styles.photos}/>
         </div>
         </Row>
        </Container>
        <SimpleFooter/>
      </div>
    );
  }

}

const styles = {
  page: {
    fontFamily: "Raleway"
  },
  titleText: {
    marginTop: "50px"
  },
  introduction: {
    textAlign: "justify"
  },
  meetUs: {
    marginTop: "20px",
    marginBottom: "15px"
  },
  photos: {
    width: "120px"
  },

  organizePhotos: {
    width: "200px",
    textAlign: "center",
    marginBottom: "30px"
  }

}


export default WhoAreWe;
