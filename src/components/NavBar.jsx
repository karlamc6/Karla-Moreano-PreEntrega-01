import logo from '../imagenes/cordova-importaciones.png'
import CartWidget from './CartWidget'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import iconoN from '../imagenes/CORDOVA IMPORTACIONES.png'
import { Link } from "react-router";


function NavBar() {
    return (
        <>
            <Navbar sticky="top" expand="lg" className="bg-body-tertiary">
                <Container>
                    <img src={iconoN} alt="" />
                    <Navbar.Brand as={Link} to="/">Karla Kiosk</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/category/groceries">Abarrotes</Nav.Link>
                            <Nav.Link as={Link} to="/category/home-decoration">Decoración de Hogar</Nav.Link>
                            <Nav.Link as={Link} to="/category/furniture">Muebles</Nav.Link>
                            <Nav.Link as={Link} to="/category/kitchen-accessories">Accesorios de Cocina</Nav.Link>
                            <Nav.Link as={Link} to="/category/fragrances">Fragancias</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <CartWidget />
                </Container>
            </Navbar>
        </>
    ) 
}

export default NavBar