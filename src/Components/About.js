import React, { Component } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap'; 

class About extends Component {
  render() {

    if(this.props.data){
      var profilepic= "/assets/images/"+this.props.data.image;
      var bio = this.props.data.bio;
      var email = this.props.data.email;
    }

    return (        
      <Container fluid id="about" className="about">
        <Row className="justify-content-md-center">
          <Col md={2} className="profile-pic-container">
            <Image roundedCircle className="profile-pic" src={profilepic} alt="Pablo Panero's Profile Pic"/>
          </Col>
          <Col md={6}>
              <Row>
                <Col>
                  <h2>About Me</h2>
                  <p>{bio}</p>
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
  }
}

export default About;
