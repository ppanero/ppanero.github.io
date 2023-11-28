import React, { useCallback } from 'react';
import 'bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFileLines } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare, faLinkedin, faOrcid, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Row from 'react-bootstrap/Row';
import Tooltip from 'react-bootstrap/Tooltip';
import WordCloud from 'react-d3-cloud';

function App() {
  const words = [
    // Programming languages
    { text: 'Python', value: 120 },
    { text: 'Go', value: 70 },
    { text: 'JavaScript', value: 30 },
    // Web technologies and frameworks
    { text: 'Flask', value: 80 },
    { text: 'Django', value: 70 },
    { text: 'Invenio', value: 60 },
    { text: 'Celery', value: 60 },
    { text: 'SQLAlchemy', value: 50 },
    { text: 'Webpack', value: 30 },
    { text: 'React', value: 30 },
    // Databases
    { text: 'PostgreSQL', value: 80 },
    { text: 'Elasticsearch', value: 70 },
    // Data
    { text: 'Spark', value: 50 },
    { text: 'Kafka', value: 50 },
    { text: 'Flume', value: 30 },
    { text: 'YARN', value: 30 },
    { text: 'Tensorflow', value: 30 },
    { text: 'Keras', value: 30 },
    // DevOps
    { text: 'Docker', value: 80 },
    { text: 'Datadog', value: 70 },
    { text: 'GitHub Actions', value: 70 },
    { text: 'Kibana', value: 70 },
    { text: 'OpenShift', value: 40 },
    { text: 'Helm', value: 30 },
    { text: 'Grafana', value: 30 },
    // Hobbies
    { text: 'Dancing', value: 80 },
    { text: 'Trekking', value: 80 },
    { text: 'Basketball', value: 50 },
  ];
  const fontSize = useCallback((word) => word.value / 2, []);
  const angles = [-90, 0];
  const rotate = useCallback(() => angles[Math.floor(Math.random() * angles.length)], []);
  const colors = ['#CAF0F8', '#90E0EF', '#48CAE4', '#00B4D8', '#0077B6', '#023E8A'];
  const fill = useCallback(() => colors[Math.floor(Math.random() * colors.length)], []);

  return (
    <div className="App">
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col md={8}>
            <Row className="section">
              <h1>I&apos;m Pablo Panero</h1>
              <h3>Software Engineer @ <a href="https://preply.com">Preply</a></h3>
              <hr />
              <ListGroup horizontal className="social justify-content-md-center">
                <ListGroup.Item key="cv">
                  <OverlayTrigger
                    placement="bottom"
                    overlay={<Tooltip>Resume</Tooltip>}
                  >
                    <a href="https://github.com/ppanero/ppanero.github.io/blob/development/ppanero_resume.pdf">
                      <FontAwesomeIcon icon={faFileLines} />
                    </a>
                  </OverlayTrigger>
                </ListGroup.Item>
                <ListGroup.Item key="mail">
                  <OverlayTrigger
                    placement="bottom"
                    overlay={<Tooltip>Mail</Tooltip>}
                  >
                    <a href="mailto:pablopanerovz@gmail.com">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                  </OverlayTrigger>
                </ListGroup.Item>
                <ListGroup.Item key="linkedin">
                  <OverlayTrigger
                    placement="bottom"
                    overlay={<Tooltip>LinkedIn</Tooltip>}
                  >
                    <a href="https://www.linkedin.com/in/ppanero/">
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                  </OverlayTrigger>
                </ListGroup.Item>
                <ListGroup.Item key="github">
                  <OverlayTrigger
                    placement="bottom"
                    overlay={<Tooltip>GitHub</Tooltip>}
                  >
                    <a href="http://github.com/ppanero">
                      <FontAwesomeIcon icon={faGithubSquare} />
                    </a>
                  </OverlayTrigger>
                </ListGroup.Item>
                <ListGroup.Item key="stackoverflow">
                  <OverlayTrigger
                    placement="bottom"
                    overlay={<Tooltip>StackOverflow</Tooltip>}
                  >
                    <a href="https://stackoverflow.com/users/7031728/ppanero">
                      <FontAwesomeIcon icon={faStackOverflow} />
                    </a>
                  </OverlayTrigger>
                </ListGroup.Item>
                <ListGroup.Item key="orcid">
                  <OverlayTrigger
                    placement="bottom"
                    overlay={<Tooltip>ORCID</Tooltip>}
                  >
                    <a href="https://orcid.org/0000-0001-6759-6273">
                      <FontAwesomeIcon icon={faOrcid} />
                    </a>
                  </OverlayTrigger>
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
            <Row>
              <WordCloud
                data={words}
                spiral="archimedean"
                fontSize={fontSize}
                rotate={rotate}
                fill={fill}
              />
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
