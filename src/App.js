import React, { Component } from 'react';
import axios from "axios";
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';

class App extends Component {

  constructor(props){
    super(props);
    this._isMounted = false;
    this.state = {
      information: {}
    };
  }

  getInfo(){
    axios.get(
      '/assets/data/info.json',
      { headers: { "Accet": "application/json"} }
    ).then(result => {
      if (this._isMounted) {
        this.setState({ information: result.data })
      }
    });
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
