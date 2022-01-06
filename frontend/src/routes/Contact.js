import React, {useState} from 'react';
import '../stylesheets/App.css';
import {Card, Container} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faBookOpen,
    faCloudMeatball,
    faEnvelope, faEnvelopeOpenText,
    faMailBulk,
    faPhone,
    faUser,
    faVoicemail
} from "@fortawesome/free-solid-svg-icons";
import Row from "react-bootstrap/Row";
import {firestore} from "../firebase";
import Alert from "react-bootstrap/Alert";

const moment = require('moment');

export const Contact = () => {
    // Name, LastName, Email,PhoneNr, Message, Subject

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNr, setPhoneNr] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [btnDisable, setBtnDisable] = useState(false);
    return (
        <div className={"container pt-5"}>
            <Card className={"p-2 shadow-lg bg-opaque"}>
                <Card.Title bg={"light"}><h1 className={"text-center"}>Contact me:</h1></Card.Title>
                <Form
                    onSubmit={onSubmit}>
                    <Form.Group as={Row} controlId={"name"}>
                        <Form.Label column sm={3}>
                            <FontAwesomeIcon className={"mr-2"} icon={faUser}/>
                            <Form.Label>Name</Form.Label>
                        </Form.Label>
                        <Col sm={9}>
                            <Form.Control
                                required
                                placeholder="Enter name"
                                value={name}
                                onChange={event => setName(event.target.value)}/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="email">

                        <Col sm={5}>
                            <FontAwesomeIcon className={"mr-2"} icon={faEnvelope}/>
                            <Form.Label>Email address</Form.Label>
                        </Col>
                        <Col>
                            <Form.Control required
                                          type="email"
                                          placeholder="Enter email"
                                          value={email}
                                          onChange={event => setEmail(event.target.value)}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="phoneNr">
                        <Col sm={5} classname={"d-flex justify-content-center"}>
                            <FontAwesomeIcon className={"mr-2"} icon={faPhone}/>
                            <Form.Label>Phone number (Optional) </Form.Label>

                        </Col>
                        <Col>
                            <Form.Control required
                                          type="number"
                                          placeholder="Enter phone number"
                                          value={phoneNr}
                                          onChange={event => setPhoneNr(event.target.value)}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="subject">
                        <Col sm={3}>
                            <FontAwesomeIcon className={"mr-2"} icon={faBookOpen}/>
                            <Form.Label>Subject</Form.Label>
                        </Col>
                        <Col sm={9}>
                            <Form.Control required
                                          column sm={9}
                                          type="text"
                                          placeholder="Enter subject"
                                          value={subject}
                                          onChange={event => setSubject(event.target.value)}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="content">
                        <Col sm={3}>
                            <FontAwesomeIcon className={"mr-2"} icon={faEnvelopeOpenText}/>
                            <Form.Label>Content</Form.Label>
                        </Col>
                        <Col sm={9}>
                            <Form.Control required
                                          as="textarea"
                                          rows="3"
                                          placeholder="Enter content"
                                          value={message}
                                          onChange={event => setMessage(event.target.value)}
                            />
                        </Col>
                    </Form.Group>
                    <div className={"d-flex justify-content-center"}>
                        <Button disabled={btnDisable} variant="primary" type="submit">
                            Submit
                        </Button>
                    </div>
                </Form>
            </Card>
        </div>
    );

    /*
    * const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNr, setPhoneNr] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");*/

    function onSubmit(event) {
        setBtnDisable(true);
        event.preventDefault();
        let msg = {
            name: name,
            email: email,
            phoneNr: phoneNr,
            subject: subject,
            message: message,
            time: moment().format('YYYY-MM-DD hh:mm')
        };

        try {
            firestore
                .collection("messages")
                .add(msg)
                .then(ref => {
                   /* return(
                        <Alert  variant={"success"}>
                            The message has been sent successfully!
                        </Alert>
                    )*/
                    alert('Message has been sent successfully');
                });
        } catch (e) {
            alert(e)
        }

       /* console.log("Thank you for submitting!\n" +
            "This is sent to the server:" +
            "First Name:" + msg + " time: " + msg.time)*/
    }

    };

    export default Contact;
