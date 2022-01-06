import React from "react";
import { useForm } from "react-hook-form";
import {Card, Container} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBookOpen, faEnvelope, faEnvelopeOpenText, faPhone, faUser} from "@fortawesome/free-solid-svg-icons";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export const Test = () => {
    const { handleSubmit, register, errors } = useForm();
    const onSubmit = values => console.log(values);

    return (
            <div className={"container pt-5"}>
                <Card className={"p-2 shadow-lg bg-opaque"}>
                    <Card.Title bg={"light"}><h1 className={"text-center"}>Contact me:</h1></Card.Title>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group as={Row} controlId={"name"}>
                            <Form.Label column sm={3}>
                                <FontAwesomeIcon className={"mr-2"} icon={faUser}/>
                                <Form.Label>Name</Form.Label>
                            </Form.Label>
                            <Col sm={9}>
                                <Form.Control placeholder="Enter name"
                                              name={"name"}
                                              useRef={"register"}/>
                            </Col>

                        </Form.Group>
                        <Form.Group as={Row} controlId="email">
                            <Col sm={5}>
                                <FontAwesomeIcon className={"mr-2"} icon={faEnvelope}/>
                                <Form.Label>Email address</Form.Label>
                            </Col>
                            <Col>
                                <Form.Control type="email"
                                              placeholder="Enter email"
                                              name="email"
                                              useRef={register({
                                                  required: "Required",
                                                  pattern: {
                                                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                                      message: "invalid email address"
                                                  }
                                              })}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="phoneNr">

                            <Col sm={5} classname={"d-flex justify-content-center"}>
                                <FontAwesomeIcon className={"mr-2"} icon={faPhone}/>
                                <Form.Label>Phone number (Optional) </Form.Label>

                            </Col>
                            <Col>
                                <Form.Control type="number"
                                              placeholder="Enter phone number"
                                              name={"number"}
                                              useRef={"register"}/>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="subject">
                            <Col sm={3}>
                                <FontAwesomeIcon className={"mr-2"} icon={faBookOpen}/>
                                <Form.Label>Subject</Form.Label>
                            </Col>
                            <Col sm={9}>
                                <Form.Control column sm={9} type="text"
                                              placeholder="Enter subject"
                                              name={"subject"}
                                              useRef={"register"}/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="content">
                            <Col sm={3}>
                                <FontAwesomeIcon className={"mr-2"} icon={faEnvelopeOpenText}/>
                                <Form.Label>Content</Form.Label>
                            </Col>
                            <Col sm={9}>
                                <Form.Control as="textarea"
                                              rows="3"
                                              placeholder="Enter content"
                                              name={"name"}
                                              useRef={"register"}/>
                            </Col>

                        </Form.Group>
                        <div className={"d-flex justify-content-center"}>

                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </div>
                    </Form>
                </Card>



            {/*<form onSubmit={handleSubmit(onSubmit)}>
                email
                <input
                    name="email"
                    useRef={register({
                        required: "Required",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: "invalid email address"
                        }
                    })}
                />
                {errors.email && errors.email.message}

                username
                <input
                    name="username"
                    useRef={register({
                        validate: value => value !== "admin" || "Nice try!"
                    })}
                />
                {errors.username && errors.username.message}

                <button type="submit">Submit</button>
            </form>*/}

            </div>
    );
};