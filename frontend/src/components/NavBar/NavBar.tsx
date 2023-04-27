import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import { AiOutlineUser } from "react-icons/ai";
import { GrLogout, GrLogin } from "react-icons/gr";
import { ReactComponent as GeocachingFiLogo } from "../../images/gcfi.svg";
import CustomModal from "../LoginRegisterModal";
import { useState } from "react";
import UserContext from "../../context/UserContext";
import { useContext } from "react";
import premiumOn from "../../images/premium_on.png";
import { Accordion } from "react-bootstrap";
import { RxHamburgerMenu } from "react-icons/rx";
import OffcanvasMenu from "../OffcanvasMenu";
import { logout } from "../../api/auth";
import Spinner from "../Spinner";

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
    const [loading, setLoading] = useState(false);

    const toggle = () => {
        setisOpen(!isOpen);
    };

    const handleLogout = async () => {
        setLoading(true);
        await logout();
        userContext.setUser(null);
        setShowUserDropdown(false);
        setLoading(false);
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

    const toggleUserDropdown = () => {
        setShowUserDropdown(!showUserDropdown);
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
                        <AiOutlineUser color="white" size="30px" onClick={toggleUserDropdown} aria-label="Käyttäjätiedot" role="button" />
                        {
                            showUserDropdown && (
                                <div className="gc-navbar-user-menu">
                                    {userContext.user && (
                                        <>
                                            <div className="dropdown-item">
                                                {userContext.user.username}  {getPremiumContent(userContext.user.isPremium)}
                                            </div>
                                            <div className="dropdown-item">Saldo: 0.00 €</div>
                                            <hr />
                                            <button className="dropdown-item" onClick={handleLogout}>
                                                { loading ? <Spinner size="25px"/> : <GrLogout size={"25px"} /> } Kirjaudu ulos
                                            </button>
                                        </>
                                    )}
                                    {!userContext.user && (
                                        <>
                                            <button className="dropdown-item" onClick={toggle}>
                                                <GrLogin size={"25px"} /> Kirjaudu/Rekisteröidy
                                            </button>
                                        </>
                                    )}
                                </div>
                            )
                        }
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
            <CustomModal onFormSubmit={toggleUserDropdown} isOpen={isOpen} toggle={toggle} />
        </>
    );
};

export default NavBar;