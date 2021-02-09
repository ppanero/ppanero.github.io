import React from 'react';
import Nav from 'react-bootstrap/Nav';

const Header = () => (
  <Nav className="header justify-content-center">
    <Nav.Item>
      <Nav.Link href="#home">Home</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="#about">About</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="#resume">Resume</Nav.Link>
    </Nav.Item>
  </Nav>
);

export default Header;
