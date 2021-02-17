import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Image } from 'semantic-ui-react';

import ProfilePic from '../../assets/images/profilepic.jpg';

const About = ({ bio, email }) => (

  <Grid centered columns={2} id="about" className="about">
    <Grid.Row centered columns={4}>
      <Grid.Column width={4} className="profile-pic-container">
        <Image src={ProfilePic} size="medium" circular className="profile-pic" alt="Pablo Panero's Profile Pic" />
      </Grid.Column>
      <Grid.Column width={8}>
        <Grid.Row>
          <h2>About Me</h2>
          <p>{ bio }</p>
        </Grid.Row>
        <Grid.Row>
          <h2>Contact Details</h2>
          <p>{ email }</p>
        </Grid.Row>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

About.propTypes = {
  bio: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default About;
