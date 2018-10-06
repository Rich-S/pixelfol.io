import React, { Component } from 'react';
import './App.css'
import SearchWidgetContainer from './Containers/searchWidgetContainer';
import MatrixContainer from './Containers/matrixContainer';
import fetchUniverse from './Utilities/fetchUniverse';
import Table from './Containers/table';

class App extends Component {
  constructor(props) {
    super(props);
    fetchUniverse();
    //console.log(localStorage.universe)
  }
  render() {
    return (
      <div className="Main">
        <div className="App">
          <SearchWidgetContainer id="search-widget-container" />
        </div>
        <div className="BP">
          <MatrixContainer id="matrix-container" />
          <Table id="table-container"/>
        </div>
      </div>
    );
  }
}

export default App;
//        <SearchWidgetContainer id="search-widget-container" />
//        <MatrixContainer id="matrix-container" />
