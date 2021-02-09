import React from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

const images = require.context('../../assets/images', true);

const Resume = ({ work, education, publications }) => {
  const testfunc = () => {
    console.error('TEST YEAH!');
  };

  const workList = work.map((workExp) => {
    let roles = null;
    if (workExp.roles.length > 0) {
      roles = (
        <Row>
          <Container>
            <ul className="work-item-roles d-none"> { /* Better styling than ListGroup for the needs of this section */ }
              { workExp.roles.map((role, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <li key={index} className="work-item-roles-item"><p>{ ReactHtmlParser(role) }</p></li>
              ))}
            </ul>
            <div className="text-center">
              <Button className="btn-show-more" type="submit" size="sm" onClick={() => testfunc}>Show more</Button>
            </div>
          </Container>
        </Row>
      );
    }

    return (
      <Row key={workExp.years}>
        <Col md={2} className="work-item-image">
          <Image src={images(`./work/${workExp.icon}`).default} rounded />
        </Col>
        <Col md={10}>
          <h3>{workExp.title}</h3>
          <p>{workExp.company}<span>&bull;</span> <em>{workExp.years}</em></p>
          <p>{ ReactHtmlParser(workExp.description) }</p>
          <div>{ roles }</div>
        </Col>
      </Row>
    );
  });

  const educationList = education.map((degree) => (
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

  const publicationsList = publications.map((publication) => (
    <Row className="publication" key={publication.key}>
      <p>{ ReactHtmlParser(publication.reference) }</p>
    </Row>
  ));

  return (
    <Container fluid id="resume" className="resume">
      <Row className="justify-content-md-center">
        <Col md={8}>
          <Row>
            <Col md={3} className="resume-header">
              <h1><span>Work</span></h1>
            </Col>
            <Col md={9} className="work">
              { workList }
            </Col>
          </Row>
          <hr />
          <Row>
            <Col md={3} className="resume-header">
              <h1><span>Education</span></h1>
            </Col>
            <Col md={9} className="education">
              { educationList }
            </Col>
          </Row>
          <hr />
          <Row>
            <Col md={3} className="resume-header">
              <h1><span>Publications</span></h1>
            </Col>
            <Col md={9}>
              { publicationsList }
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

Resume.propTypes = {
  work: PropTypes.arrayOf(PropTypes.object).isRequired,
  education: PropTypes.arrayOf(PropTypes.object).isRequired,
  publications: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Resume;
