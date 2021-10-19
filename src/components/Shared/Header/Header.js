import React from 'react';
import { Button, Nav } from 'react-bootstrap';
import './Header.css';
import logo from '../../../Images/medicare1.jpg'
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div className="nav-bar">
        {/*******************Navigation logo**************************/}
        <div className="navbar-img">
          <img className="img-fluid" src={logo} alt="" />
        </div>        

         <div className="header-icon">
        <Nav>
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
            <Nav.Link className="navLink" href="/login">Login</Nav.Link>
          </Nav.Item>
        </Nav>
        {user?.email ?
              <Button onClick={logOut} variant="light">LogOut</Button> :
              <Nav.Link as={Link} to="/login">Login</Nav.Link>

            }
      </div>
    </div >
  );
};

export default Header;