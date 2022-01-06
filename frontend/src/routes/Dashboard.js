import React, {useEffect, useState} from 'react';
import {auth, firestore, userIsLoggedInn} from "../firebase";
import Card, {CardBody} from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBookOpen, faEnvelope, faEnvelopeOpenText, faPhone, faUser} from "@fortawesome/free-solid-svg-icons";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import {langsJSON} from "../components/LangsJSON";

const Dashboard = (props) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [link, setLink] = useState("");
    const [image, setImage] = useState("");
    const [langs, setLangs] = useState([]);
    const [type, setType] = useState("web");


    function addSelectedLangs(event) {
        const selectedOptions = [...event.target.selectedOptions].map(o => o.value);
        setLangs(selectedOptions)
    }

    return (
        <div className={"container "}>
            <Card className={"shadow-lg mt-5 bg-opaque"}>
                <Card.Title className={"text-center"}><h1>Admin Dashboard</h1></Card.Title>
                <Card.Subtitle className={"text-center"}>Add new project </Card.Subtitle>
                <Card.Body>
                    <Form onSubmit={onSubmit}>
                        <Form.Group as={Row} controlId={"title"}>
                            <Form.Label column sm={3}>
                                <FontAwesomeIcon className={"mr-2"} icon={faUser}/>
                                <Form.Label>Title</Form.Label>
                            </Form.Label>
                            <Col sm={9}>
                                <Form.Control
                                    required
                                    placeholder="Enter title"
                                    value={title}
                                    onChange={event => setTitle(event.target.value)}/>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId={"description"}>
                            <Form.Label column sm={3}>
                                <FontAwesomeIcon className={"mr-2"} icon={faUser}/>
                                <Form.Label>Description</Form.Label>
                            </Form.Label>
                            <Col sm={9}>
                                <Form.Control required
                                              placeholder="Enter description"
                                              value={description}
                                              onChange={event => setDescription(event.target.value)}
                                              as="textarea"
                                              rows="3"/>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId={"link"}>
                            <Form.Label column sm={3}>
                                <FontAwesomeIcon className={"mr-2"} icon={faUser}/>
                                <Form.Label>Link</Form.Label>
                            </Form.Label>
                            <Col sm={9}>
                                <Form.Control placeholder="Enter link (optional)"
                                              value={link}
                                              onChange={event => setLink(event.target.value)}/>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId={"image"}>
                            <Form.Label column sm={3}>
                                <FontAwesomeIcon className={"mr-2"} icon={faUser}/>
                                <Form.Label>Image Url</Form.Label>
                            </Form.Label>
                            <Col sm={9}>
                                <Form.Control required
                                              placeholder="Enter image url"
                                              value={image}
                                              onChange={event => setImage(event.target.value)}/>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId={"langs"}>

                            <Form.Label column sm={3}>
                                <FontAwesomeIcon className={"mr-2"} icon={faUser}/>
                                <Form.Label>Langs</Form.Label>
                            </Form.Label>
                            <Col sm={9}>
                                <Form.Control
                                    value={langs}
                                    onChange={addSelectedLangs}
                                    as="select"
                                    multiple>
                                    {langsJSON.map(logo => {
                                        return <option
                                            value={logo.name}
                                        >{logo.name}</option>
                                    })}
                                </Form.Control>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId={"type"}>
                            <Form.Label column sm={3}>
                                <FontAwesomeIcon className={"mr-2"} icon={faUser}/>
                                <Form.Label>Type</Form.Label>
                            </Form.Label>
                            <Col sm={9}>
                                <Form.Control
                                    value={type}
                                    onChange={(e) => {
                                        setType(e.target.value)
                                    }}
                                    as="select"
                                >
                                    <option value="coding">coding</option>
                                    <option value="other">other</option>
                                    <option value="web">web</option>

                                </Form.Control>
                            </Col>
                        </Form.Group>

                        <div className={"d-flex justify-content-center"}>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </div>
                    </Form>
                </Card.Body>

            </Card>
        </div>
    );

    function onSubmit(event) {
        event.preventDefault();

        let project = {
            title: title,
            description: description,
            link: link,
            image: image,
            langs: langs,
            type: type
        };

        try {
            firestore
                .collection("projects")
                .add(project)
                .then(ref => {
                    alert('Added document with ID: ' + ref.id);
                });
        } catch (e) {
            alert(e)
        }
    }

};

export default Dashboard;