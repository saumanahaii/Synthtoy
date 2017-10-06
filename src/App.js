import React, { Component } from 'react';
import GridContainer from './components/gridContainer';
import Player from './components/player';
import PatternBar from './components/patternBar';
import Timeline from './components/timeline'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>SynthToy</h1>
        </div>
        <div className = "row">
          <PatternBar />
          <div className="ActivePattern">
            <GridContainer />
            <Player />
          </div>
        </div>
        <div className = "row">
          <Timeline />
        </div>
      </div>
    );
  }
}

export default App;
