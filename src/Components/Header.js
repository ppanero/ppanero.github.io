import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';

class Header extends Component {
  render() {
    return (
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
  }
}

export default Header;
