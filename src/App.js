import React, { Component } from 'react';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';

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
        <Footer/>
      </div>
    );
  }
}

export default App;
