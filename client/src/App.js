import React, { Component } from 'react';
import './App.css'
import fetchUniverse from './Utilities/fetchUniverse';
import WidgetContainer from './Containers/widgetContainer';
import MatrixSlider from './Containers/MatrixSlider';
import Table from './Containers/table';


class App extends Component {
  constructor(props) {
    super(props);
    fetchUniverse();
  }
  render() {
    return (
      <div className="App">
        <WidgetContainer className="Widget" />
        <div className="App-Partition-B">
          <MatrixSlider className="Matrix"/>
          <Table className="Table"/>
        </div>
      </div>
    );
  }
}

export default App;
