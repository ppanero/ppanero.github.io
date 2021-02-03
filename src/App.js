import React, { Component } from 'react';
import About from './Components/About';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import Resume from './Components/Resume';

import data from '../assets/data/info.json';

class App extends Component {

  constructor(props){
    super(props);
    this._isMounted = false;
    this.state = {
      information: {}
    };
  }

  getInfo(){
    if (this._isMounted) {
      this.setState({ information: data })
    }
  }

  componentDidMount(){
    this._isMounted = true;
    this.getInfo();
  }

  componentWillUnmount(){
    this._isMounted = false;
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Home data={this.state.information.personal}/>
        <About data={this.state.information.personal}/>
        <Resume data={this.state.information.resume}/>
        <Footer/>
      </div>
    );
  }
}

export default App;
