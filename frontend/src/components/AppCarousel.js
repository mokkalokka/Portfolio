import {useState} from "react";
import * as React from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import Logos from "./Logos";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export function AppCarousel(props) {
    const [index, setIndex] = useState(0);
    const [shadow, setShadow] = useState("shadow-sm");

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel className={"carousel " + shadow}
                  activeIndex={index}
                  onSelect={handleSelect}
                  onMouseEnter={() => {setShadow("shadow-lg")}}
                  onMouseLeave ={() => {setShadow("shadow-sm")}}

        >
            {props.carouselItems.map(item => {
                return (<Carousel.Item>
                    <div className={"carousel-item-custom"}>
                        <a className={"text-decoration-none"} href={item.link}>
                            <Card className={"bg-opaque h-100"}>
                                <Card.Img className={"card-img"} variant="top" src={item.image}/>
                                <Card.Title className={"text-center"}>{item.title}</Card.Title>
                                <Card.Body className={"carousel-card-body"}>
                                    <Card.Text> {item.description}</Card.Text>
                                    <Row className={"mb-3"}>
                                        {
                                        item.langs.map(lang => {
                                        return <Col xs={3}><Logos height={"40px"} name={lang}/></Col>
                                    })}
                                    </Row>
                                </Card.Body>
                            </Card>
                        </a>
                    </div>
                </Carousel.Item>)
            })}
        </Carousel>
    );
}

export default AppCarousel;