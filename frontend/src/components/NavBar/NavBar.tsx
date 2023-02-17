import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
import "./NavBar.scss";
import { AiOutlineUser } from "react-icons/ai";
import logo from "../../images/gcfi_only_logo_big_orange.png";

const NavBar = () => {
    return (
        <div>
            <Navbar className="color-nav" variant="dark" expand="lg">
                <Container>                        
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">                                
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/map">Map</Nav.Link>                            
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Brand className="logo-navbar" as={Link} to="/"><img id="logo" width="30px" src={logo}/> Geocache.fi</Navbar.Brand>
                    <Button className="color-link"><AiOutlineUser/></Button>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;