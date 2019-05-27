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


class SimpleFooter extends Component {
    render() {
        return (
            <div style={styles.container}>
                <p>Translate.me | 2019</p>
            </div>
        );
    }
}

const styles={
    container:{
        position: "absolute",
        right: 0,
        bottom: 0,
        left: 0,
        flexDirection: "row",
        textAlign: "center"
    }
}

export default SimpleFooter;

