import React from 'react';
import 'bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare, faLinkedin, faOrcid, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col md={8}>
            <Row className="section">
              <h1>I&apos;m Pablo Panero</h1>
              <h3>Senior Software Engineer @ <a href="https://zenodo.org">Zenodo</a> (CERN)</h3>
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
                <ListGroup.Item key="orcid">
                  <a href="https://orcid.org/0000-0001-6759-6273">
                    <FontAwesomeIcon icon={faOrcid} />
                  </a>
                </ListGroup.Item>
              </ListGroup>
            </Row>
            <Row className="section">
              <Col>
                <h2>About Me</h2>
                <p>
                  I&apos;m passionate about distributed and large scale systems, algorithms,
                  and coding (shocker, I know 😂).
                </p>
                <p>
                  I like dancing, playing the bass guitar, and at risk of sounding cliche: nature.
                  If you cannot reach me, I probably went for a run or I&apos;m hiking some
                  mountain.
                </p>
                <p className="quote">
                  &quot;How is it possible for thousands of nodes on a cluster to reach consensus
                  faster than a group of friends on a trip?&quot;
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
