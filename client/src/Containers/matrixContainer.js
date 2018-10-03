import React from 'react';
import SymbolsStore from '../Stores/symbolsStore';
import toMatrix from '../Utilities/toMatrix';
import GridContainer from '../Containers/gridContainer';
import { Grid } from 'react-virtualized';

const universe = toMatrix(JSON.parse(localStorage.universe), 100);

class MatrixContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      universe: null,
      items: SymbolsStore.getAllItems()
    };
    this.Grid = React.createRef();
    this._onChange = this._onChange.bind(this);
    this.cellRenderer = this.cellRenderer.bind(this);
  }
  _onChange() {
    this.setState({ items: SymbolsStore.getAllItems() }, () => this.Grid.current.forceUpdate());
  }
  componentWillMount() {
    SymbolsStore.addChangeListener(this._onChange);
  }
  componentWillUnmount() {
    SymbolsStore.removeChangeListener(this._onChange);
  }
  componentDidMount() {
    this.setState({universe: universe})
  }
  cellRenderer ({ columnIndex, key, rowIndex, style }) {
    let item = this.state.universe[rowIndex][columnIndex] ? this.state.universe[rowIndex][columnIndex].symbol : '';
    let backgroundColor = this.state.items.includes(item) ? 'blue' : 'black';
    let _style = Object.assign({backgroundColor: backgroundColor}, style);
    return (
      <GridContainer
        key={key}
        style={_style}
        item={item}
        />
    )
  }
  render() {
    const isDataFetched = this.state.universe;
    let component;
    if (isDataFetched) {
      component =  <Grid
          ref={this.Grid}
          cellRenderer={this.cellRenderer}
          columnCount={this.state.universe[0].length}
          columnWidth={10}
          height={1000}
          rowCount={this.state.universe.length}
          rowHeight={10}
          width={1000}
          overscanRowCount={0}
        />
    } else {
      component = <div> </div>
    }
    return (
      component
    )
  }
}

export default MatrixContainer
