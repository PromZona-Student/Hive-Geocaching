import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import { AiOutlineUser } from "react-icons/ai";
import { GrLogout, GrLogin } from "react-icons/gr";
import { ReactComponent as GeocachingFiLogo } from "../../images/gcfi.svg";
import CustomModal from "../CustomModal";
import { useState } from "react";
import UserContext, { UserContextType } from "../../context/UserContext";
import { useContext } from "react";
import premiumOn from "../../images/premium_on.png";
import { Accordion, Offcanvas } from "react-bootstrap";
import { RxHamburgerMenu, RxHand } from "react-icons/rx";
import OffcanvasMenu from "../OffcanvasMenu";

interface Props {
    fixedTop?: boolean
}

const NavBar = ({
    fixedTop = false
}: Props) => {
    const [isOpen, setisOpen] = useState(false);
    const userContext = useContext(UserContext);
    const [showUserDropdown, setShowUserDropdown] = useState(false);
    const [navMenuOpen, setNavMenuOpen] = useState(false);

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

    const closeNavMenu = () => {
        setNavMenuOpen(false);
    };

    const showNavMenu = () => {
        setNavMenuOpen(true);
    };

    const getDropDownContent = (userContext: UserContextType) => {
        if (userContext.user == null) {
            return (
                <>
                    <div className="dropdown-item" onClick={toggle}>
                        <GrLogin size={"25px"} /> Kirjaudu/Rekisteröidy
                    </div>
                </>
            );
        } else {
            return (
                <>
                    <div className="dropdown-item">
                        {userContext.user.username}  {getPremiumContent(userContext.user.isPremium)}
                    </div>
                    <div className="dropdown-item">Saldo: 0.00 €</div>
                    <hr />
                    <div className="dropdown-item" onClick={logout}>
                        <GrLogout size={"25px"} /> Kirjaudu ulos
                    </div>
                </>
            );
        }
    };
    return (
        <>
            <div className={`gc-navbar ${fixedTop && "gc-navbar--fixed"}`}>
                <div className="gc-navbar-content">
                    <div className="gc-navbar-item" aria-label="Avaa valikko" onClick={showNavMenu}>
                        <RxHamburgerMenu size="30px" color="white" />
                    </div>
                    <div className="gc-navbar-item">
                        <Link to="/"><GeocachingFiLogo className="logo-navbar" aria-label="Etusivulle" /></Link>
                    </div>
                    <div className="gc-navbar-item">
                        <AiOutlineUser color="white" size="30px" onClick={() => setShowUserDropdown(!showUserDropdown)} aria-label="Käyttäjätiedot" role="button" />
                        <div className="gc-navbar-user-menu" hidden={!showUserDropdown}>
                            {getDropDownContent(userContext)}
                        </div>
                    </div>
                </div>
            </div>
            <OffcanvasMenu
                open={navMenuOpen}
                onClose={closeNavMenu}
                header="Valikko"
                body={
                    <Accordion>
                        <Accordion.Header>
                            Kätköt
                        </Accordion.Header>
                        <Accordion.Body>
                            <Nav.Link as={Link} to="/map">Kartta</Nav.Link>
                        </Accordion.Body>
                    </Accordion>
                }
                footer={
                    <></>
                }
            />
            <CustomModal isOpen={isOpen} toggle={toggle} />
        </>
    );
};

export default NavBar;