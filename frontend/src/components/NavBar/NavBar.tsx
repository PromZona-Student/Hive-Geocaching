import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
import "./Navbar.scss";
import { AiOutlineUser } from "react-icons/ai";
import logo from "../../images/gcfi_only_logo_big_orange.png";
import CustomModal from "../CustomModal";
import useModal from "../../Hooks/useModal";

interface Props {
    fixedTop?: boolean;
    sticky?: boolean;
}

const NavBar = ({
    fixedTop = false,
    sticky = false
}: Props) => {
    const { isOpen, toggle } = useModal();
    return (
        <div>
            <Navbar fixed={fixedTop ? "top": undefined} sticky={sticky ? "top" : undefined} className="color-nav" variant="dark" expand="lg">
                <Container fluid>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Brand className="logo-navbar" as={Link} to="/"><img aria-label="Geocache.fi"id="logo" width="30px" src={logo}/></Navbar.Brand>
                    <Button className="color-link" onClick={toggle}><AiOutlineUser size={"25px"}/></Button>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">                                
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/map">Map</Nav.Link>                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <CustomModal isOpen={isOpen} toggle={toggle}/>
        </div>
    );
};

export default NavBar;