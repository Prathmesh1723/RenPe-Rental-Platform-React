import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import './navbar.css';

function ColorSchemesExample() {
  return (
    <>
      <br />
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/"><div className="navbar-Title">Rent<span>Pe</span></div></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link  href="Home">Home</Nav.Link>
            <Nav.Link  href="About">About</Nav.Link>
            <Nav.Link  href="Service">Service</Nav.Link>
            <Nav.Link  href="Blog">Blog</Nav.Link>
            <Nav.Link  href="Contact">Contact</Nav.Link>
          </Nav>
          <Button className='Sign-in-Btn' href="/signup" variant="outline-primary">Sign-up</Button>{''}
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;