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
          <Nav.Link eventKey="#about">About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="#resume">Resume</Nav.Link>
        </Nav.Item>
      </Nav>
    );
  }
}

export default Header;
