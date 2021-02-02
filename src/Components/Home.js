import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import {Col, Container, Row} from 'react-bootstrap';

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
            <ul className="social">
              <li key="mail">
                <a href="mailto:pablopanerovz@gmail.com">
                  <FontAwesomeIcon icon={faEnvelope}/>
                </a>
              </li>
              <li key="linkedin">
                <a href="https://www.linkedin.com/in/ppanero/">
                  <FontAwesomeIcon icon={faLinkedin}/>
                </a>
              </li>
              <li key="github">
                <a href="http://github.com/ppanero">
                  <FontAwesomeIcon icon={faGithubSquare}/>
                </a>
              </li>
            </ul>
          </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Header;
