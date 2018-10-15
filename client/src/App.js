import React, { Component } from 'react';
import './App.css'

import fetchIntoMem from './Services/fetchIntoMem';
import TreeMapContainer from './Containers/treemapContainer';
import NavContainer from './Containers/navContainer';
import SelectContainer from './Containers/selectContainer';
import ChipsContainer from './Containers/chipsContainer';
import Table from './Containers/table';

class App extends Component {
  constructor(props) {
    super(props);
    //  fetch from dynamoDB before the app renders
    fetchIntoMem();
  }
  render() {
    return (
      <div>
        <NavContainer brand="pixelfol.io" />
        <div className="App">
          <TreeMapContainer className="App left"/>
          <div className="App right">
            <div className="App right select-widget">
              <SelectContainer id="select-container"/>
              <ChipsContainer id="chips-container"/>
            </div>
            <Table className="Table"/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
