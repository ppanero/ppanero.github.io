import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Accordion from 'react-bootstrap/Accordion';
// import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import parse from 'html-react-parser';

const images = require.context('../../assets/images', true);

export default class Resume extends Component {
  constructor(props) {
    super(props);
    // this.state = { // FIXME: This should be dynamic not hardcoded
    //   button0: 'show more',
    //   button1: 'show more',
    //   button2: 'show more',
    // };
    this.work = props.work;
    this.education = props.education;
    this.publications = props.publications;
  }

  getWorkList() {
    const workList = this.work.map((workExp, workIdx) => {
      let roles = null;
      if (workExp.roles.length > 0) {
        roles = (
          <Row>
            <Container>
              <ul className="work-item-roles"> { /* Better styling than ListGroup for the needs of this section */ }
                { workExp.roles.map((role, index) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <li key={index} className="work-item-roles-item"><p>{ parse(role) }</p></li>
                ))}
              </ul>
            </Container>
          </Row>
        );
      }

      return (
        <Row key={workExp.years}>
          <Accordion>
            <Accordion.Item eventKey={`${workIdx}`}>
              <Accordion.Header>
                <Col md={2} className="work-item-image">
                  <Image src={images(`./work/${workExp.icon}`).default} rounded />
                </Col>
                <Col md={10}>
                  <h3>{workExp.title}</h3>
                  <p>{workExp.company}<span>&bull;</span> <em>{workExp.years}</em></p>
                  <p>{ parse(workExp.description) }</p>
                </Col>
              </Accordion.Header>
              <Accordion.Body>{ roles }</Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Row>
      );
    });

    return workList;
  }

  getEducationList() {
    const educationList = this.education.map((degree) => (
      <Row key={degree.school}>
        <Col md={2} className="education-item-image">
          <Image src={images(`./education/${degree.icon}`).default} rounded />
        </Col>
        <Col md={10}>
          <h3>{ degree.school }</h3>
          <p>{degree.degree} <span>&bull;</span> <em>{degree.graduated}</em></p>
          <p>{degree.description}</p>
        </Col>
      </Row>
    ));

    return educationList;
  }

  getPublicationsList() {
    const publicationsList = this.publications.map((publication) => (
      <Row className="publication" key={publication.key}>
        <p>{ parse(publication.reference) }</p>
      </Row>
    ));

    return publicationsList;
  }

  // updateButtonState(idx) {
  //   const btnId = `button${idx}`;
  //   // eslint-disable-next-line react/destructuring-assignment
  //   const currentState = this.state[`${btnId}`];

  //   this.setState({
  //     [`${btnId}`]: currentState === 'show more' ? 'show less' : 'show more',
  //   });
  // }

  render() {
    return (
      <Container fluid id="resume" className="resume">
        <Row className="justify-content-md-center">
          <Col md={8}>
            <Row>
              <Col md={3} className="resume-header">
                <h1><span>Work</span></h1>
              </Col>
              <Col md={9} className="work">
                { this.getWorkList() }
              </Col>
            </Row>
            <hr />
            <Row>
              <Col md={3} className="resume-header">
                <h1><span>Education</span></h1>
              </Col>
              <Col md={9} className="education">
                { this.getEducationList() }
              </Col>
            </Row>
            <hr />
            <Row>
              <Col md={3} className="resume-header">
                <h1><span>Publications</span></h1>
              </Col>
              <Col md={9}>
                { this.getPublicationsList() }
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

Resume.propTypes = {
  work: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  education: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  publications: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
