import React, { useCallback } from 'react';
import 'bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare, faLinkedin, faOrcid, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import WordCloud from 'react-d3-cloud';

function App() {
  const words = [
    // Programming languages
    { text: 'Python', value: 120 },
    { text: 'Go', value: 70 },
    { text: 'JavaScript', value: 30 },
    // Web technologies and frameworks
    { text: 'Flask', value: 80 },
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
    { text: 'OpenShift', value: 70 },
    { text: 'GitHub Actions', value: 70 },
    { text: 'Helm', value: 40 },
    { text: 'OpenStack', value: 30 },
    { text: 'Puppet', value: 30 },
    { text: 'Kibana', value: 30 },
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
