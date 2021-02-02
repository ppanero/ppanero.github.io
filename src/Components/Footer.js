import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import { Col, Container, Row } from 'react-bootstrap';

class Footer extends Component {
  render() {
    return (
      <Container fluid className="footer">
        <Row className="justify-content-md-center">
          <Col lg={true}>
            <ul className="social">
              <li key="mail"><a href="mailto:pablopanerovz@gmail.com"><FontAwesomeIcon icon={faEnvelope}/></a></li>
              <li key="linkedin"><a href="https://www.linkedin.com/in/ppanero/"><FontAwesomeIcon icon={faLinkedin}/></a></li>
              <li key="github"><a href="http://github.com/ppanero"><FontAwesomeIcon icon={faGithubSquare}/></a></li>
            </ul>

            <p className="copyright">&copy; Copyright 2021 Pablo Panero</p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Footer;
