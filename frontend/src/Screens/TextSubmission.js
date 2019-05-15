import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import { white, green, lightgreen } from '../colors'
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import Cloud from './cloud.png'
import { FilePond } from 'react-filepond';
import 'filepond/dist/filepond.min.css';



class TextSubmission extends Component {
    constructor(props) {
        super(props);
        this.state = {
            files: []
        }
    }

    handleInit() {
        console.log("FilePond instance has initialised", this.pond);
    }

    render() {
        return (
            <div style={styles.screen}>
                <Container>
                    <Row>
                        <Col style={styles.title}>
                            <h2>Submeta aqui seu arquivo acadêmico para ser traduzido</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Container style={styles.upload_box}>
                                <Row>
                                    <Col>
                                        <Image style={styles.cloud_image} src={Cloud} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <p>
                                            Arraste seu arquivo para cá <br/>ou
                                        </p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <FilePond
                                            ref={ref => (this.pond = ref)}
                                            files={this.state.files}
                                            allowMultiple={false}
                                            maxFiles={1}
                                            // server="/api"
                                            oninit={() => this.handleInit()}
                                            onupdatefiles={fileItems => {
                                                // Set currently active file objects to this.state
                                                this.setState({
                                                    files: fileItems.map(fileItem => fileItem.file)
                                                });
                                                console.log(this.state.files)
                                                // console.log(this.readTextFile(this.state.files[0]))
                                            }}
                                        />
                                    </Col>
                                </Row>

                            </Container>
                        </Col>
                    </Row>
                </Container>
            </div>
            
        );
    }
}


const styles = {
    screen: {
        backgroundColor: white,
        display: "flex",
        flexDirection: "column",
        alignText: "center",
        alignSelf: "center"
    },
    title: {
        marginTop: "2vh",
        fontFamily: "Raleway",
        textAlign: "center",
        fontSize: "35px",
    },
    cloud_image: {
        height: "70px",
        width: "70px",
    },
    upload_box: {
        textAlign: "center",
        border: "1px solid black",
        width: "50%"
    }

}

export default TextSubmission;

