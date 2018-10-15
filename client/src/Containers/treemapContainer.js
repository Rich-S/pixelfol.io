import React from 'react';
import SymbolsStore from '../Stores/symbolsStore';
import symbolsActions from '../Actions/symbolsActions';
import TreemapComponent from '../d3/treemap';
import { Treemap } from "d3plus-react";


class TreeMapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groupBy: "id",
      data: this.formatData(),
      size: d => d.value
    };
    this.TreeMap = React.createRef();
    this._onChange = this._onChange.bind(this);
  }
  _onChange() {
    this.setState({ data: this.formatData() });
  }
  formatData() {
    let fetchedData = SymbolsStore.getUniverse().filter(d=> SymbolsStore.getAllItems().includes(d.symbol));
    let packedData = fetchedData.map(d=>{
      return {
        id: d.symbol,
        value: d.marketcap
      }
    });
    return packedData;

  }
  componentWillMount() {
    SymbolsStore.addChangeListener(this._onChange);
  }
  componentWillUnmount() {
    SymbolsStore.removeChangeListener(this._onChange);
  }
  componentDidMount() {
    this.setState({width: this.TreeMap.current.clientWidth, height: this.TreeMap.current.clientHeight});
  }
  render() {
    const dimensions = this.state.width;
    let component;
    if (dimensions) {
      component = <div className={this.props.className} ref={this.TreeMap}><Treemap config={this.state} /></div>
    } else {
      component = <div className={this.props.className} ref={this.TreeMap}></div>
    }
    return (
      component
    )
  }
}

export default TreeMapContainer;
