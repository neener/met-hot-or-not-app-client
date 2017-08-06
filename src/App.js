import React, { Component } from 'react';
import Collections from './components/Collections';
import CollectionService from './services/CollectionService';
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state = {
      collections: []
    }
  }

  componentDidMount() {
    CollectionService.fetchCollections().then(collections => this.setState({ collections }))
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
          {/* <MetImage /> */}
        </div>

      </div>
    );  
  }
}

export default App;
