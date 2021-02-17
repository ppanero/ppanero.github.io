import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import { Accordion, Button, Grid, Image } from 'semantic-ui-react';

const images = require.context('../../assets/images', true);

class Resume extends Component {
  constructor(props) {
    super(props);
    this.work = props.work;
    this.education = props.education;
    this.publications = props.publications;
    this.state = { activeIndex: 0 };
    this.handleItemClick = (e, titleProps) => {
      const { index } = titleProps;
      const { activeIndex } = this.state;
      const newIndex = activeIndex === index ? -1 : index;
      this.setState({ activeIndex: newIndex });
      console.error('EEEEEH');
    };
  }

  render() {
    const { activeIndex } = this.state;

    const workList = this.work.map((workExp, outterIdx) => {
      let roles = null;
      if (workExp.roles.length > 0) {
        roles = (
          <Grid.Row>
            <Accordion>
              <Accordion.Title
                active={activeIndex === outterIdx}
                index={outterIdx}
                onClick={this.handleClick}
              >
                <Button size="small" onClick={() => { console.error('WEEE'); }}>Show more</Button>
              </Accordion.Title>
              <Accordion.Content active={activeIndex === 0}>
                <ul className="work-item-roles"> { /* Better styling than ListGroup for the needs of this section */ }
                  { workExp.roles.map((role, innerIdx) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <li key={innerIdx} className="work-item-roles-item"><p>{ ReactHtmlParser(role) }</p></li>
                  ))}
                </ul>
              </Accordion.Content>
            </Accordion>
          </Grid.Row>
        );
      }

      return (
        <Grid.Row key={workExp.years}>
          <Grid.Column width={6} className="work-item-image">
            <Image src={images(`./work/${workExp.icon}`).default} size="tiny" circular />
          </Grid.Column>
          <Grid.Column width={10}>
            <h3>{workExp.title}</h3>
            <p>{workExp.company}<span>&bull;</span> <em>{workExp.years}</em></p>
            <p>{ ReactHtmlParser(workExp.description) }</p>
            <div>{ roles }</div>
          </Grid.Column>
        </Grid.Row>
      );
    });

    const educationList = this.education.map((degree) => (
      <Grid.Row key={degree.school}>
        <Grid.Column md={2} className="education-item-image">
          <Image src={images(`./education/${degree.icon}`).default} rounded />
        </Grid.Column>
        <Grid.Column md={10}>
          <h3>{ degree.school }</h3>
          <p>{degree.degree} <span>&bull;</span> <em>{degree.graduated}</em></p>
          <p>{degree.description}</p>
        </Grid.Column>
      </Grid.Row>
    ));

    const publicationsList = this.publications.map((publication) => (
      <Grid.Row className="publication" key={publication.key}>
        <p>{ ReactHtmlParser(publication.reference) }</p>
      </Grid.Row>
    ));

    return (
      <Grid id="resume" className="resume">
        <Grid.Row className="justify-content-md-center">
          <Grid.Column md={8}>
            <Grid.Row>
              <Grid.Column md={3} className="resume-header">
                <h1><span>Work</span></h1>
              </Grid.Column>
              <Grid.Column md={9} className="work">
                { workList }
              </Grid.Column>
            </Grid.Row>
            <hr />
            <Grid.Row>
              <Grid.Column md={3} className="resume-header">
                <h1><span>Education</span></h1>
              </Grid.Column>
              <Grid.Column md={9} className="education">
                { educationList }
              </Grid.Column>
            </Grid.Row>
            <hr />
            <Grid.Row>
              <Grid.Column md={3} className="resume-header">
                <h1><span>Publications</span></h1>
              </Grid.Column>
              <Grid.Column md={9}>
                { publicationsList }
              </Grid.Column>
            </Grid.Row>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

Resume.propTypes = {
  work: PropTypes.arrayOf(PropTypes.object).isRequired,
  education: PropTypes.arrayOf(PropTypes.object).isRequired,
  publications: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Resume;
