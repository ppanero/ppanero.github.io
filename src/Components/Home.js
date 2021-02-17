import React from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Grid, List } from 'semantic-ui-react';

const Home = ({ name, occupation, description, city, country }) => (
  <Grid centered className="home">
    <Grid.Row>
      <Grid.Column>
        <div className="banner-text">
          <h1>I&apos;m {name}</h1>
          <h3>... a {occupation} based in {city}, {country}. {ReactHtmlParser(description)}</h3>
          <hr />
          <List horizontal className="social">
            <List.Item key="mail">
              <a href="mailto:pablopanerovz@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </List.Item>
            <List.Item key="linkedin">
              <a href="https://www.linkedin.com/in/ppanero/">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </List.Item>
            <List.Item key="github">
              <a href="http://github.com/ppanero">
                <FontAwesomeIcon icon={faGithubSquare} />
              </a>
            </List.Item>
          </List>
        </div>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

Home.propTypes = {
  name: PropTypes.string.isRequired,
  occupation: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
};

export default Home;
