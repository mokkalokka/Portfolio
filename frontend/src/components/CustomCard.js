import React from 'react';
import {Card} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import '../stylesheets/styles.css';
import Logos from "./Logos";

export function CustomCard(props) {
    return (
        <div className={"container"}>
            <Card className={"shadow-lg mt-5 bg-opaque"}>
                <Card.Body>
                    <Row>
                        <Col md={true}>
                            <img className={"rounded-circle w-75"} src={props.cardContent.image} alt={"image"}/>
                        </Col>
                        <Col md={true}>
                            <blockquote className="blockquote mb-0">
                                <p>
                                    {' '}{props.cardContent.text}{' '}
                                </p>
                                <footer className="blockquote-footer">
                                    {props.cardContent.author}
                                </footer>
                            </blockquote>
                            <Row className={"mt-3"}>
                                {props.cardContent.links.map(link => {
                                    return <Col> <Logos height={"50px"} name={link}/></Col>
                                })
                                }
                            </Row>

                        </Col>

                    </Row>
                </Card.Body>
            </Card>
        </div>

    );
}

export default CustomCard;