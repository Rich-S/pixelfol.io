import React from 'react';
import SymbolsStore from '../Stores/symbolsStore';
import GridContainer from '../Containers/gridContainer';
import { Grid } from 'react-virtualized';

class MatrixContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      universe: SymbolsStore.getUniverse(),
      items: SymbolsStore.getAllItems()
    };
    this.Matrix = React.createRef();
    //  There are two refs in this script - the Grid refers to the react-virtualized component with the embedded dispatcher behavior
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
  //  this.setState({universe: universe})//, width: this.Matrix.current.clientWidth, height: this.Matrix.current.clientHeight})
  }
  cellRenderer ({ columnIndex, key, rowIndex, style }) {
    let item = this.state.universe[rowIndex][columnIndex] ? this.state.universe[rowIndex][columnIndex].symbol : '';
    let color = ["red", "green"][Math.floor(Math.random()*2)];
    let backgroundColor = this.state.items.includes(item) ? color : 'white';
    //let backgroundColor = this.state.items.includes(item) ? color : 'white';
    let _style = Object.assign({backgroundColor: backgroundColor, border: '1px solid ' + this.props.gridColor, color: 'none'}, style);
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
      component = (<div>
        <Grid
          ref={this.Grid}
          cellRenderer={this.cellRenderer}
          columnCount={50}//{this.state.universe[0].length}
          columnWidth={20}
          width={this.props.width}
          height={this.props.height * .8}
          rowCount={50}//{this.state.universe.length}
          rowHeight={20}
          overscanRowCount={0}
        />
        </div>)
    } else {
      component = <div> </div>
    }
    return (
      component
    )
  }
}

export default MatrixContainer;
