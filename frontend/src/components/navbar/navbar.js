import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import './navbar.css';

function ColorSchemesExample() {
  return (
    <div>
      {/* <br />
      <Navbar bg="white" variant="white">
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
      </Navbar> */}

      {/* try 1 */}
      
      {/* <header role="banner">
      <nav class="navbar navbar-expand-md">
        <div class="container">
          <a class="navbar-brand" href="'/">RentPe</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarsExample05">
            <ul class="navbar-nav ml-auto pl-lg-5 pl-0">
              <li class="nav-item">
                <a class="nav-link active" href="index.html">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Recipes</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Services</a>
                <div class="dropdown-menu" aria-labelledby="dropdown04">
                  <a class="dropdown-item" href="#">Food Catering</a>
                  <a class="dropdown-item" href="#">Drink &amp; Beverages</a>
                  <a class="dropdown-item" href="#">Wedding &amp; Birthday</a>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">News</a>
              </li>
            </ul>

            <ul class="navbar-nav ml-auto">
              <li class="nav-item cta-btn">
                <a class="nav-link" href="/login">Sign In</a>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
      </header> */}

      {/* try 2 */}

      <header>
		  <a href="/" class="logo">RentPe</a>

      <ul class="navbar">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

      <div class="main">
        <a href="/login" class="user">Sign In</a>
        <a href="/signup">Register</a>
        <div class="bx bx-menu" id="menu-icon"></div>
      </div>
	    </header>



    </div>
  );
}

export default ColorSchemesExample;