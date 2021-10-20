import React from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
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
            <Nav.Link as={Link} className="navLink" to="/home">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} className="navLink" to="/about">About US</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link  as={Link} className="navLink" to="/services">Doctor Courses</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} className="navLink" to="/doctors">Doctors Zone</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} className="navLink" to="/email">Email Login</Nav.Link>
          </Nav.Item>
        </Nav>
        {/****************Optional Chaining****************/}
        {user?.email ?
          <Button onClick={logOut} variant="secondary">LogOut</Button> :
          <Nav.Link as={Link} to="/login">Login</Nav.Link>
        }
        <Navbar.Text className="justify-content-center">
          Signed in As: <a href="#login">{user?.displayName}</a>
        </Navbar.Text>
      </div>
    </div >
  );
};

export default Header;