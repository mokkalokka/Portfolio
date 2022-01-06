import React, {useState} from 'react';
import {Card} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import '../stylesheets/styles.css';
import Logos from "./Logos";
import {langsJSON} from "./LangsJSON"


export function SkillsCard(props) {

    return (
        <div className={"container"}>
            <Card  className={"shadow-lg mt-5 bg-opaque"}>
                <Card.Title >
                    <h1 className={"text-center"}>Comfortable:</h1>
                </Card.Title>
                <Card.Body>
                    <Row>
                        {langsJSON.filter(e => e.comfort === 1).map(lang => {
                            return <Col xs={3}>
                                <Logos height={"50em"} name={lang.name}/>
                            </Col>
                        })}
                    </Row>
                </Card.Body>
                <Card.Title>
                    <h1 className={" pt-4 text-center "}>Some knowledge:</h1>
                </Card.Title>
                <Card.Body>
                    <Row>
                        {langsJSON.filter(e => e.comfort === 0).map(lang => {
                            return <Col xs={3}>
                                <Logos height={"50em"} name={lang.name}/>
                            </Col>
                        })}

                    </Row>
                </Card.Body>
            </Card>
        </div>

    );
}

export default SkillsCard;