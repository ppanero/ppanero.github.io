import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';

const Footer = () => (
  <Container fluid className="footer">
    <Row>
      <Col lg>
        <ListGroup horizontal className="social justify-content-md-center">
          <ListGroup.Item key="mail">
            <a href="mailto:pablopanerovz@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </ListGroup.Item>
          <ListGroup.Item key="linkedin">
            <a href="https://www.linkedin.com/in/ppanero/">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </ListGroup.Item>
          <ListGroup.Item key="github">
            <a href="http://github.com/ppanero">
              <FontAwesomeIcon icon={faGithubSquare} />
            </a>
          </ListGroup.Item>
        </ListGroup>
      </Col>
    </Row>
    <Row>
      <Col lg>
        <p className="copyright">&copy; Copyright 2021 Pablo Panero</p>
      </Col>
    </Row>
  </Container>
);

export default Footer;
