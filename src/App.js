import React, { Component } from 'react';
import Collections from './components/Collections';
import MetObjects from './components/MetObjects'
import CollectionService from './services/CollectionService';
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
    CollectionService.fetchCollections().then(collections => this.setState({ collections }))
    MetObjectService.fetchMetObjects().then(metobjects => this.setState({ metobjects }))
    
  }

  render() {
    console.log(this.state.collections)
    return (
      <div className="App">
        <div className="navbar">
          {/* <Navbar /> */}
        </div>
        <div className="sidebar">
          <Collections collections={this.state.collections}/>
        </div>
        <div className="main-content">
          <MetObjects metobjects={this.state.metobjects} /> 
        </div>

      </div>
    );  
  }
}

export default App;
