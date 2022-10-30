import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare, faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import parse from 'html-react-parser';

function Home({ name, occupation, description, city, country }) {
  return (
    <Container className="home" fluid>
      <Row className="justify-content-md-center">
        <Col md={8}>
          <div className="banner-text">
            <h1>I&apos;m {name}</h1>
            <h3>... a {occupation} based in {city}, {country}. {parse(description)}</h3>
            <hr />
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
              <ListGroup.Item key="stackoverflow">
                <a href="https://stackoverflow.com/users/7031728/ppanero">
                  <FontAwesomeIcon icon={faStackOverflow} />
                </a>
              </ListGroup.Item>
            </ListGroup>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

Home.propTypes = {
  name: PropTypes.string.isRequired,
  occupation: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
};

export default Home;
