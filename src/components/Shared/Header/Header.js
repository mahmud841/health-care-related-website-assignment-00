import React from 'react';
import { Nav } from 'react-bootstrap';
import './Header.css';
import logo2 from '../../../Images/logo2.jpg'

const Header = () => {
  return (
    <div className="navLink">
      <Nav className="justify-content-end">
        <Nav.Item>
          <Nav.Link className="navLink" href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="navLink" href="/about">About US</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="navLink" href="/services">Doctor Services</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="navLink" href="/doctors">Doctors Zone</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="navLink" href="/contact">Contact Us</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="navLink" href="/login">Login</Nav.Link>
        </Nav.Item>
      </Nav>

      <div className="col-md-6 col-12">
        <img className="img-header" src={logo2} alt="" />
      </div>

    </div >
  );
};

export default Header;