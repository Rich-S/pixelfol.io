import React, { Component } from 'react';
import './App.css'
import WidgetContainer from './Containers/widgetContainer';
import MatrixSlider from './Containers/MatrixSlider';
import Table from './Containers/table';
import fetchByCapSize from './Services/fetchByCapSize';

class App extends Component {
  constructor(props) {
    super(props);
    ['nano', 'micro', 'small', 'mid', 'large', 'mega'].forEach( cap =>
      fetchByCapSize(cap, (err, res) => err ? console.log(err) : localStorage.setItem(cap, JSON.stringify(res.Items))))
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
