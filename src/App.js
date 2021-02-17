import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import About from './Components/About';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import Resume from './Components/Resume';

import data from '../assets/data/info.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.information = data;
    this.handleOnClick = (e) => {
      e.preventDefault();
      // eslint-disable-next-line no-undef
      alert('WEEE');
    };
  }

  render() {
    const {
      bio,
      address,
      description,
      email,
      name,
      occupation,
    // eslint-disable-next-line react/destructuring-assignment
    } = this.information.personal;

    // eslint-disable-next-line react/destructuring-assignment
    const { work, education, publications } = this.information.resume;

    return (
      <div className="App">
        <Button size="small" onClick={this.handleOnClick}>Show more</Button>
        <Header />
        <Home
          city={address.city}
          country={address.country}
          description={description}
          name={name}
          occupation={occupation}
        />
        <About bio={bio} email={email} />
        <Resume work={work} education={education} publications={publications} />
        <Footer />
      </div>
    );
  }
}

export default App;
