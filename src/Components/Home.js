import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import {Col, Container, ListGroup, Row} from 'react-bootstrap';

class Header extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var occupation= this.props.data.occupation;
      var description= ReactHtmlParser(this.props.data.description);
      var city= this.props.data.address.city;
      var country= this.props.data.address.country;
    }

    return (
      <Container className="home" fluid>
        <Row className="justify-content-md-center">
          <Col lg={true}>
          <div className="banner-text">
            <h1>I'm {name}</h1>
            <h3>... a {occupation} based in {city}, {country}. {description}</h3>
            <hr />
            <ListGroup horizontal className="social justify-content-md-center">
              <ListGroup.Item key="mail">
                <a href="mailto:pablopanerovz@gmail.com">
                  <FontAwesomeIcon icon={faEnvelope}/>
                </a>
              </ListGroup.Item>
              <ListGroup.Item key="linkedin">
                <a href="https://www.linkedin.com/in/ppanero/">
                  <FontAwesomeIcon icon={faLinkedin}/>
                </a>
              </ListGroup.Item>
              <ListGroup.Item key="github">
                <a href="http://github.com/ppanero">
                  <FontAwesomeIcon icon={faGithubSquare}/>
                </a>
              </ListGroup.Item>
            </ListGroup>
          </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Header;
