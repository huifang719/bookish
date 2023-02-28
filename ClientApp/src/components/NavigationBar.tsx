import React, { useState } from "react";
import { Navbar, Nav, Container, Row, Col, Badge } from "react-bootstrap";
import {
    FaFacebook, FaInstagram, FaTwitter, FaCartArrowDown
} from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';
import "../App.css"
import { useSelector } from 'react-redux';
import NavSearch from './NavSearch';


const NavigationBar: React.FC = () => {
    const [expanded, setExpanded] = useState(false);
    const CartItems = useSelector((state: any) => state.cart.value)
    const totalItems = CartItems.reduce((total: number, item: any) => total + item.quantity, 0)
    return (
        <Navbar bg="light" expand="lg" expanded={expanded}>
            <Container fluid>
                <Navbar.Brand as={Link} to="/">Bookish</Navbar.Brand>
                <Navbar.Toggle onClick={() => setExpanded(expanded ? false : true)} aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto justify-content-space-evenly" >
                        <Nav.Link onClick={() => setExpanded(false)} as={Link} to="/">Home</Nav.Link>
                        <Nav.Link onClick={() => setExpanded(false)} as={Link} to="/products">Products</Nav.Link>
                        <Nav.Link onClick={() => setExpanded(false)} as={Link} to="./members">Members</Nav.Link>
                    </Nav>
                    {/* <Form className="d-inline-flex search">
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form> */}
                    < NavSearch />
                    <Row>
                        <Col xs={8} lg={6} md={10} className="cart">
                            <IconContext.Provider value={{ size: '2.5rem', color: 'black' }}>
                                <Link to="/cart">
                                    <FaCartArrowDown /><Badge pill bg="dark" style={totalItems > 0 ? { width: "3rem" } : { display: "none" }}>{totalItems}</Badge>
                                </Link>
                            </IconContext.Provider>
                        </Col>
                        <Col xs={4} lg={6} md={2} style={{ alignSelf: "flex-end", justifySelf: "flex-end" }} >
                            <Container className="social" >
                                <IconContext.Provider value={{ size: '1rem', color: 'black' }}>
                                    <Col>
                                        <a href="./"><FaFacebook /></a>
                                    </Col>
                                    <Col>
                                        <a href="https://www.instagram.com/lightstory_photography/"><FaInstagram /></a>
                                    </Col>
                                    <Col>
                                        <a href="https://twitter.com/Lightstory_foto"><FaTwitter /></a>
                                    </Col>
                                </IconContext.Provider>
                            </Container>
                        </Col>
                    </Row>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;
