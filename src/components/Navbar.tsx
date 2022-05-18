import { Navbar as AppBar, Nav, Container } from "react-bootstrap";

const Navbar = () => {
  return (
    <AppBar bg="primary" expand="lg" variant="dark">
      <Container>
        <AppBar.Brand href="#home">
          <a className="text-light">Quiz App</a>
        </AppBar.Brand>
        <AppBar.Toggle aria-controls="responsive-navbar-nav" />
        <AppBar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">
              <a href="#" className="text-light">
                Login
              </a>
            </Nav.Link>
            <Nav.Link href="#features">
              <a href="#" className="text-light">
                Register
              </a>
            </Nav.Link>
          </Nav>
        </AppBar.Collapse>
      </Container>
    </AppBar>
  );
};

export default Navbar;
