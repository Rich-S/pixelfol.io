import React, { Component } from 'react';
import './App.css'
import WidgetContainer from './Containers/widgetContainer';
import MatrixSlider from './Containers/MatrixSlider';
import Table from './Containers/table';
import fetchIntoMem from './Services/fetchIntoMem';
import renderChart from './d3/heatmap';
import fundHoldings from './assets/fundHoldings.json';
import { Autocomplete, Navbar, NavItem, Row } from 'react-materialize';
import SelectContainer from './Containers/selectContainer';


class App extends Component {
  constructor(props) {
    super(props);
    //  fetch from dynamoDB before the app renders
    fetchIntoMem();
  }
  //componentDidMount() {
  //  renderChart('.Heatmap')
  //}
  render() {
    return (
      <div>
        <Navbar brand='pixelfol.io' right></Navbar>
        <div className="App">
          <div className='leftPanel'>
            <SelectContainer id="searchrow" />
            <div className="Heatmap">
            </div>
          </div>
          <Table className="Table"/>
        </div>
      </div>
    );
  }
}

function hashify(obj) {
  let hash = {};
  Object.keys(obj).forEach(d=>hash[d]=null);
  return hash;
}
export default App;
//<MatrixSlider className="Matrix"/>
//<WidgetContainer className="Widget" />
//<div className="App-Partition-B">
//  <div className="Heatmap"/>
//  <Table className="Table"/>
//</div>
