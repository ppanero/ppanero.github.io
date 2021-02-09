import React from 'react';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

import ProfilePic from '../../assets/images/profilepic.jpg';

const About = ({ bio, email }) => (
  <Container fluid id="about" className="about">
    <Row className="justify-content-md-center">
      <Col md={2} className="profile-pic-container">
        <Image roundedCircle className="profile-pic" src={ProfilePic} alt="Pablo Panero's Profile Pic" />
      </Col>
      <Col md={6}>
        <Row>
          <Col>
            <h2>About Me</h2>
            <p>{ bio }</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>Contact Details</h2>
            <p>{ email }</p>
          </Col>
        </Row>
      </Col>
    </Row>
  </Container>
);

About.propTypes = {
  bio: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default About;
