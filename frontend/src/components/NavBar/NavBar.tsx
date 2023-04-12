import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import { AiOutlineUser } from "react-icons/ai";
import { GrLogout } from "react-icons/gr";
import {ReactComponent as GeocachingFiLogo} from "../../images/gcfi.svg";
import CustomModal from "../CustomModal";
import { useState } from "react";
import UserContext, { UserContextType } from "../../context/UserContext";
import { useContext } from "react";
import premiumOn from "../../images/premium_on.png";
import { Accordion, Offcanvas } from "react-bootstrap";

interface Props {
    fixedTop?: boolean;
    sticky?: boolean;
}

const NavBar = ({
    fixedTop = false,
    sticky = false
}: Props) => {
    const [isOpen, setisOpen] = useState(false);
    const userContext = useContext(UserContext);

    const toggle = () => {
        setisOpen(!isOpen);
    };

    const logout = () => {
        userContext.setUser(null);
    };

    const getPremiumContent = (isPremium: boolean) => {
        if (isPremium) {
            return (
                <img aria-label="Premium user" id="premium-logo" src={premiumOn} />
            );
        }
    };

    const getDropDownContent = (userContext: UserContextType) => {
        if (userContext.user == null) {
            return (
                <div>
                    <NavDropdown.Item
                        href="#"
                        onClick={toggle}
                    >
                        <GrLogout size={"25px"} /> Kirjaudu/Rekisteröidy
                    </NavDropdown.Item>
                </div>
            );
        } else {
            return (
                <div>
                    <NavDropdown.Item href="#">
                        {userContext.user.username}  {getPremiumContent(userContext.user.isPremium)}
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#">Saldo: 0.00 €</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item
                        href="#"
                        onClick={logout}
                    >
                        <GrLogout size={"25px"} /> Kirjaudu ulos
                    </NavDropdown.Item>
                </div>
            );
        }
    };
    return (
        <>
            <Navbar fixed={fixedTop ? "top" : undefined} sticky={sticky ? "top" : undefined} className="color-nav" variant="dark" expand="false">
                <Container fluid>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Brand as={Link} to="/"><GeocachingFiLogo className="logo-navbar"/></Navbar.Brand>
                    <NavDropdown
                        className="color-link"
                        align={"end"}
                        title={
                            <Button data-testid="drop-button" className="color-link"><AiOutlineUser size={"25px"} /></Button>
                        }
                    >
                        {getDropDownContent(userContext)}
                    </NavDropdown>
                    <Navbar.Offcanvas>
                        <Offcanvas.Header closeButton>
                            Valinnat
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Accordion>
                                <Accordion.Header>
                                    Kätköt
                                </Accordion.Header>
                                <Accordion.Body>
                                    <Nav.Link as={Link} to="/map">Kartta</Nav.Link>
                                </Accordion.Body>
                            </Accordion>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
            <CustomModal isOpen={isOpen} toggle={toggle} />
        </>
    );
};

export default NavBar;