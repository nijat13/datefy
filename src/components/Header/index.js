import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Nav, Navbar } from "react-bootstrap";

const Header = () => (
    <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Datefy</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
            </Nav>
            <Nav>
                <Nav.Link
                    href="https://github.com/nijat13/datefy"
                    target="_blank"
                >
                    <FontAwesomeIcon icon={faGithub} />
                </Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

export default Header;