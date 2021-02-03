import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { Col, Container, Image, Row } from 'react-bootstrap'; 

var images = require.context('../../assets/images', true);

class Resume extends Component {
  
  render() {
    if(this.props.data){
      var workExperience = this.props.data.work.map(function(work){
        return <div key={work.years}><h3>{work.title}</h3>
            <p>{work.company}<span>&bull;</span> <em>{work.years}</em></p>
            <p>{ ReactHtmlParser(work.description) }</p>
        </div>
      });

      var education = this.props.data.education.map(function(education) {
        return (
          <Row key={education.school}>
            <Col md={2} className="education-item-image">
              <Image src={images(`./education/${education.icon}`).default} rounded />
            </Col>
            <Col md={10}>
              <div key={education.school}><h3>{education.school}</h3>
              <p>{education.degree} <span>&bull;</span><em>{education.graduated}</em></p>
              <p>{education.description}</p></div>
            </Col>
          </Row>
        )
      });

      var publications = this.props.data.publications.map(function(publications){
        return (
          <div className="publication" key={publications.key}>
            <p>{ ReactHtmlParser(publications.reference) }</p>
          </div>
        )
      });
    }

    return (        
      <Container fluid id="resume" className="resume">
        <Row className="justify-content-md-center">
          <Col md={8}>
            <Row>
              <Col md={3} className="resume-header">
                  <h1><span>Work</span></h1>
              </Col>

              <Col md={9}>
                { workExperience }
              </Col>
            </Row>
            <hr></hr>
            <Row>
              <Col md={3} className="resume-header">
                  <h1><span>Education</span></h1>
              </Col>

              <Col md={9} className="education">
                { education }
              </Col>
            </Row>
            <hr></hr>
            <Row>
              <Col md={3} className="resume-header">
                  <h1><span>Publications</span></h1>
              </Col>

              <Col md={9}>
                { publications }
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Resume;
