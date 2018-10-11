import React, { Component } from 'react';
import './App.css'
import WidgetContainer from './Containers/widgetContainer';
import MatrixSlider from './Containers/MatrixSlider';
import Table from './Containers/table';
import fetchIntoMem from './Services/fetchIntoMem';

class App extends Component {
  constructor(props) {
    super(props);
    //  fetch from dynamoDB before the app renders
    fetchIntoMem()
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
