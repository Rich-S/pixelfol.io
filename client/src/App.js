import React, { Component } from 'react';
import SearchWidgetContainer from './Containers/searchWidgetContainer';
import MatrixContainer from './Containers/matrixContainer';
import fetchUniverse from './Utilities/fetchUniverse';


class App extends Component {
  constructor(props) {
    super(props);
    fetchUniverse();
  }
  render() {
    return (
      <div className="App">
        <SearchWidgetContainer />
        <MatrixContainer />
      </div>
    );
  }
}

export default App;
