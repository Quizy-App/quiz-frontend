import { Navbar as AppBar, Nav, Container } from "react-bootstrap";

const Navbar = () => {
  return (
    <AppBar bg="primary" expand="lg" variant="dark">
      <Container>
        <AppBar.Brand href="#home">Quiz App</AppBar.Brand>

        <Nav>
          <AppBar.Toggle aria-controls="responsive-navbar-nav" />
          <AppBar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav.Link href="#features">Login</Nav.Link>
            <Nav.Link href="#features">Register</Nav.Link>
          </AppBar.Collapse>
        </Nav>
      </Container>
    </AppBar>
  );
};

export default Navbar;
