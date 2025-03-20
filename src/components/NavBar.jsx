import logo from '../imagenes/cordova-importaciones.png'
import CartWidget from './CartWidget'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import iconoN from '../imagenes/CORDOVA IMPORTACIONES.png'
import { Link } from "react-router"

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
                            <Nav.Link as={Link} to="/category/Abarrotes">Abarrotes</Nav.Link>
                            <Nav.Link as={Link} to="/category/Frutas">Frutas</Nav.Link>
                            <Nav.Link as={Link} to="/category/Verduras">Verduras</Nav.Link>
                            <Nav.Link as={Link} to="/category/Carnes">Carnes</Nav.Link>
                            <Nav.Link as={Link} to="/category/Accesorios de Cocina">Accesorios de Cocina</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <CartWidget />
                </Container>
            </Navbar>
        </>
    ) 
}

export default NavBar