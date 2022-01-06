import Button from "react-bootstrap/Button";
import React, {useState} from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCog} from "@fortawesome/free-solid-svg-icons";
import {auth} from "../firebase"
import {withRouter} from "react-router";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


function Login(props) {
    const [show, setShow] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    function dashboardHandler(){
        handleClose();
        props.history.replace("/dashboard")
    }

    async function logoutHandler(event) {
        /*event.preventDefault();*/
        try{
            props.history.replace("/");
            await auth.signOut();
            handleClose();
        }
        catch (error) {
            alert(error)
        }
    }

    async function loginHandler(event) {
        event.preventDefault();
        try{
            await auth.signInWithEmailAndPassword(email, password);
            handleClose(true);
            props.history.replace("/dashboard");
        }
        catch (error) {
            alert(error)
        }
    }

    function getModal() {
        if (auth.currentUser){
            /*props.history.replace("/dashboard");*/
            return (
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>You are logged in as admin</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col>
                                <Button onClick={dashboardHandler} variant="outline-info" >
                                    Dashboard
                                </Button>
                            </Col>
                            <Col>
                                <Button onClick={logoutHandler} variant="outline-danger">
                                    Logout
                                </Button>
                            </Col>
                        </Row>


                    </Modal.Body>
                </Modal>
            )
        }
        else {
            return (
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Admin Login</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control value={email}
                                              onChange={event => setEmail(event.target.value)}
                                              type="email"
                                              placeholder="Enter email"/>
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control value={password}
                                              onChange={event => setPassword(event.target.value)}
                                              type="password"
                                              placeholder="Password"/>
                            </Form.Group>
                            <Button onClick={loginHandler} variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Modal.Body>
                </Modal>
            )
        }
    }

    return (
        <>
            <Button title="Admin Login"
                    variant={"none"}
                    onClick={handleShow}>
                <FontAwesomeIcon  className={"mr-2"} icon={faCog}/>
            </Button>
            {getModal()}
        </>
    );
}

export default withRouter(Login);