import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import MapViewPage from "../../pages/MapViewPage/MapViewPage";
import HomePage from "../../pages/HomePage/HomePage";
import "./Navbar.scss";
import { AiOutlineUser } from "react-icons/ai";

const NavBar = () => {
    return (
        <Router>
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
                        <Navbar.Brand as={Link} to="/">Geocache.fi</Navbar.Brand> 
                        <Button className="color-link"><AiOutlineUser/></Button>
                    </Container>
                </Navbar>
            </div>
            <div>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/map" element={<MapViewPage/>}/>
                </Routes>
            </div>
        </Router>
    );
};

export default NavBar;