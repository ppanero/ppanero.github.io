import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Grid, List } from 'semantic-ui-react';

const Footer = () => (
  <Grid centered className="footer">
    <Grid.Row>
      <Grid.Column width={4}>
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
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <p className="copyright">&copy; Copyright 2021 Pablo Panero</p>
    </Grid.Row>
  </Grid>
);

export default Footer;
