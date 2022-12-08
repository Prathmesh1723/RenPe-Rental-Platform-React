import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import "./navbar.css";



function ColorSchemesExample() {

  function burger() {
    let menu = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');

    menu.onclick = () => {
      menu.classList.toggle('bx-x');
      navbar.classList.toggle('open');
    }
  }
  return (
    <div>

      {/* try 2 */}

      <header>
		  <a href="/" class="logo">Rent<span>Pe</span></a>

      <ul class="navbar">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

      <div class="main">
        <a href="/login" class="user">Sign In</a>
        <a href="/signup" class="register"><span>Register</span></a>
        <div class="bx bx-menu" id="menu-icon" onClick={burger}>
          <svg viewBox="0 0 100 80" width="40" height="40">
            <rect width="70" height="3"></rect>
            <rect y="20" width="70" height="3"></rect>
            <rect y="40" width="70" height="3"></rect>
          </svg>
        </div>
      </div>
	    </header>


        <ul class="navbar">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About Us</a>
          </li>
          <li>
            <a href="/listings">Listings</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>

        <div class="main">
          <a href="/login" class="user">
            Sign In
          </a>
          <a href="/signup">Register</a>
          <div class="bx bx-menu" id="menu-icon"></div>
        </div>
    </div>
  );
}

export default ColorSchemesExample;
