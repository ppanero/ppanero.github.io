import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap'; 

class About extends Component {
  render() {

    if(this.props.data){
      // TODO: Get the needed data
    }

    return (        
      <Container fluid id="resume" className="resume">
        <Row className="justify-content-md-center">
          <Col md={8}>
              <Row>
                <Col>
                  <h2>Resume</h2>
                  <p>Section under construction... Coming Soon!</p>
                </Col>
              </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default About;
