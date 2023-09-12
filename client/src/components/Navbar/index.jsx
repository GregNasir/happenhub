import './index.scss'
import { useState } from 'react'
// import { Link, NavLink } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Hubnav = () => {
    const [showNav, setShowNav] = useState(false);
    return (
        <>
            
            <Navbar fixed="top" expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand href="/">HappenHub</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="menu"
                            style={{ maxHeight: '500px' }}
                            navbarScroll
                        >
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
                            <NavDropdown title="Events" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="/music">music</NavDropdown.Item>
                                <NavDropdown.Item href="/food">food</NavDropdown.Item>
                                <NavDropdown.Item href="/sports">sports</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/art">
                                    Art
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/favorites">Favorites</Nav.Link>
                        </Nav>

                        <Form className="d-flex" id="city-zip">
                            <Form.Control
                                type="search"
                                placeholder="City or Zip Code"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>

                        <Form className="d-flex" id="search-form">
                            <Form.Control
                                type="search"
                                placeholder="Search Events"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>






            {/* </div> */}



        </>
    )
}

export default Hubnav;