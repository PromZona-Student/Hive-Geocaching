import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
import "./Navbar.scss";
import { AiOutlineUser } from "react-icons/ai";
import { GrLogout } from "react-icons/gr";
import logo from "../../images/gcfi_only_logo_big_orange.png";
import CustomModal from "../CustomModal";
import { useState } from "react";
import UserContext, { UserContextType } from "../../context/UserContext";
import {useContext} from "react";
import premiumOn from "../../images/premium_on.png";

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
        if(isPremium){
            return(
                <img aria-label="Premium user" id="premium-logo" src={premiumOn}/>
            );
        }
    };

    const getDropDownContent = (userContext: UserContextType) => {
        if(userContext.user==null){
            return(
                <div>
                    <NavDropdown.Item 
                        href="#"
                        onClick={toggle}
                    >
                        <GrLogout size={"25px"}/> Kirjaudu/Rekisteröidy
                    </NavDropdown.Item>
                </div>
            );
        }else{
            return(
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
                        <GrLogout size={"25px"}/> Kirjaudu ulos
                    </NavDropdown.Item>
                </div>
            );
        }
    };
    return (
        <div>
            <Navbar fixed={fixedTop ? "top": undefined} sticky={sticky ? "top" : undefined} className="color-nav" variant="dark" expand="lg">
                <Container fluid>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Brand className="logo-navbar" as={Link} to="/"><img aria-label="Geocache.fi"id="logo" width="30px" src={logo}/></Navbar.Brand>
                    <NavDropdown 
                        className="color-link"  
                        align={{ lg: "start" }} 
                        title={
                            <Button data-testid="drop-button" className="color-link"><AiOutlineUser size={"25px"}/></Button>
                        }
                    >     
                        {getDropDownContent(userContext)}               
                    </NavDropdown>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">                                
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/map">Map</Nav.Link>                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <CustomModal isOpen={isOpen} toggle={toggle} />
        </div>
    );
};

export default NavBar;