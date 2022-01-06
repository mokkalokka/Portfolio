import * as React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import NavDropdown from "react-bootstrap/NavDropdown";
import {useState} from "react";
import '../stylesheets/AppNavbar.css';
import NavLink from "react-bootstrap/NavLink";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Login from "./Login";

export function AppNavbar() {
    const [input, setInput] = useState("");

    const handleSearch = evt => {
        evt.preventDefault();
        alert(`Submitting: ${input}`);
    };

    return (
        <Navbar bg={"light"} expand="lg" className={"py-0 navbar shadow"}>
            <NavLink href="/"><h1 className="test text-center text-body">MokkaLokka Tech</h1></NavLink>
            <Navbar.Toggle aria-controls="basic-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavDropdown title="My projects" id="basic-nav-dropdown">
                        <NavDropdown.Item
                            className={getActiveState("projects/web-pages")}
                            href="/projects/web-pages">Web
                        </NavDropdown.Item>
                        <NavDropdown.Item
                            className={getActiveState("projects/coding")}
                            href="/projects/coding">Coding
                        </NavDropdown.Item>
                        <NavDropdown.Item
                            className={getActiveState("projects/other-projects")}
                            href="/projects/other-projects">Other projects
                        </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link className={getActiveState("skills")} href="/skills">Skills</Nav.Link>
                    <Nav.Link target="_blank" href="https://drive.google.com/file/d/1gMKHPOJiyM_MY10Ff6ITxl62rA1tJjhV/view?usp=sharing">My CV</Nav.Link>
                    <Nav.Link className={getActiveState("about-me")} href="/about-me">About me </Nav.Link>
                    <Nav.Link className={getActiveState("contact")} href="/contact">Contact</Nav.Link>
                </Nav>
                <Form onSubmit={handleSearch}>
                    <Row>
                        {/*<Col className={"p-0"}>
                            <FormControl
                                type="text"
                                placeholder="Search"
                                className="mr-sm-2"
                                value={input}
                                onChange={e => setInput(e.target.value)}
                            />
                        </Col>
                        <Col className={"p-0"} >
                            <Button variant="outline-success" onClick={handleSearch}>
                                Search
                            </Button>
                        </Col>*/}
                        <Col>
                            <Login sm/>
                        </Col>
                    </Row>

                </Form>
            </Navbar.Collapse>
        </Navbar>
    );


    function getActiveState(page) {
        if (window.location.pathname.slice(1) === page) {
            return "active"
        } else {
            return ""
        }
    }
}
