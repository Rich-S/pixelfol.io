import React from 'react';
import SymbolsStore from '../Stores/symbolsStore';
import GridContainer from '../Containers/gridContainer';
import { Grid } from 'react-virtualized';

class MatrixContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      universe: SymbolsStore.getCap(props.cap, this.props.width, this.props.height * .8),
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
    let item = this.state.universe.data[rowIndex][columnIndex] ? this.state.universe.data[rowIndex][columnIndex].symbol : '';
    //let color = ["red", "green"][Math.floor(Math.random()*2)];
    let backgroundColor = this.state.items.includes(item) ? this.props.gridColor : '#383838';
    //let backgroundColor = this.state.items.includes(item) ? color : 'white';
    let _style = Object.assign({backgroundColor: backgroundColor, border: '2px solid ' + this.props.gridColor, color: 'none'}, style);
    return (
      <GridContainer
        key={key}
        style={_style}
        item={item}
        />
    )
  }
  render() {
    const isDataFetched = this.state.universe.data;
    let component;
    if (isDataFetched) {
      component = (<div>
        <Grid
          ref={this.Grid}
          cellRenderer={this.cellRenderer}
          columnCount={this.state.universe.data[0].length}//{50}//{this.state.universe[0].length}
          columnWidth={(this.props.width / this.state.universe.data[0].length)}
          width={this.props.width}
          height={this.props.height * .8}
          rowCount={this.state.universe.data.length}
          rowHeight={(this.props.height * .8 / this.state.universe.data.length)}
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
