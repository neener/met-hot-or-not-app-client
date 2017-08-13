import React, { Component } from 'react';
import MetObjects from './components/MetObjects'
import MetObjectService from './services/MetObjectService';
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state = {
      collections: [],
      metobjects: []
    }
  }

  componentDidMount() {
    MetObjectService.fetchMetObjects().then(metobjects => this.setState({ metobjects }))
    
  }

  render() {
    return (
      <div className="App">
        <div className="navbar">
          <h2> Metropolitan Museum of Art </h2>
          {/* <Navbar /> */}
        </div>
        <div className="sidebar">
          {/* <Departments /> */}
        </div>
        <div className="main-content">
          <MetObjects metobjects={this.state.metobjects} /> 
        </div>

      </div>
    );  
  }
}

export default App;
