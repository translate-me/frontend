import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const rights = "Todos os direitos reservados. Os textos mencionados aqui pertencem unica e exclusivamente "+ 
               "aos seus autores, e os tradutores possuem créditos somente pelos serviços de tradução, utilizando "+
               "obrigatoriamente a marca registrada do translate.me como intermediário."

const developed = "Projeto desenvolvido na Universidade de Brasília, Campus Gama, pela disciplina Desenho de Software"

const privacy = "Nossa política de privacidade pode mudar com o tempo. Publicaremos qualquer alteração na "+
                "política de privacidade nesta página. Nossas práticas de privacidade estão descritas na " +
                "política de privacidade completa."


class Footer extends Component {
    render() {
        return (
            <div style={styles.container}>
                <div style={styles.left}>
                    <p style={styles.title}>Direitos Autorais</p>
                    <p style={styles.description}>{rights}</p>
                    <p style={styles.description}>Este site é propriedade da marca translate.me.</p>
                    <p style={styles.description}> Lugar de registro: Brasil.</p>
                </div>
                <div style={styles.right}>
                    <p style={styles.title}>Sobre o Projeto</p>
                    <p style={styles.description}>{developed}</p>
                    <p style={styles.title}>Contato</p>
                    <p style={styles.title}>
                        <FontAwesomeIcon icon={faEnvelope} style={styles.icon}/> welzrenan@gmail.com
                    </p>
                    <a href="#temosDeUso" style={styles.title}>Termos de Uso</a>
                    <p style={styles.description}>{privacy}</p>
                </div>
            </div>
        );
    }
}

const styles={
    title:{
        fontFamily: "Raleway",
        fontWeight: "bold",
        color: "gray" 
    },
    description:{
        fontFamily: "Raleway",
        color: "gray",
        textAlign: "justify"
    },
    icon:{
        color: "gray",
        marginRight: "5px" 
    },
    left:{
        margin: "20px",
        width: "45%"
    },
    right:{
        margin: "15px",
        width: "55%"
    },
    container:{
        display: "flex",
        flexDirection: "row"
    }
}

export default Footer;

