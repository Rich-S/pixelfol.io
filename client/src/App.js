import React, { Component } from 'react';
import './App.css'
import SearchWidgetContainer from './Containers/searchWidgetContainer';
import MatrixContainer from './Containers/matrixContainer';
import fetchUniverse from './Utilities/fetchUniverse';


class App extends Component {
  constructor(props) {
    super(props);
    fetchUniverse();
    console.log(localStorage.universe)
  }
  render() {
    return (
      <div className="App">
        <SearchWidgetContainer id="search-widget-container" />
        <MatrixContainer id="matrix-container" />
      </div>
    );
  }
}

export default App;
