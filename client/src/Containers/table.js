import React from 'react';
import { Column, Table } from 'react-virtualized';
import './table.css';
import SymbolsStore from '../Stores/symbolsStore';
import 'react-virtualized/styles.css'
import fetchByCapSize from '../Services/fetchByCapSize';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: SymbolsStore.getUniverse(),
      asc: true,
      stylesheet: {
        symbol: 1/9,
        name: 3/9,
        tick: 1/9,
        lastSalePrice: 1/9,
        bidSize: 1/9,
        askSize: 1/9,
        volume: 1/9
      }
    };
    this.Table = React.createRef();
    this._onChange = this._onChange.bind(this);
  }
  _onChange() {
    this.setState({ data: (SymbolsStore.getAllItems().length > 0) ? SymbolsStore.getUniverse().filter(d=> SymbolsStore.getAllItems().includes(d.symbol)) : SymbolsStore.getUniverse() });
  }
  componentWillMount() {
    SymbolsStore.addChangeListener(this._onChange);
  }
  componentWillUnmount() {
    SymbolsStore.removeChangeListener(this._onChange);
  }
  componentDidMount() {
    setInterval(this.setState({ data: this.state.data, width: this.Table.current.clientWidth, height: this.Table.current.clientHeight }), 1200)
  }
  downloadData() {
    ['nano', 'micro', 'small', 'mid', 'large', 'mega'].forEach( cap =>
      fetchByCapSize(cap, (err, res) => err ? console.log(err) : localStorage.setItem(cap, JSON.stringify(res.Items))));
  }
  render() {
    const inheritedDimensions = this.state.width;
    if (inheritedDimensions) {
      let data = this.state.data;
      return (
        <Table
          className={this.props.className}
          width={this.state.width}
          height={this.state.height}
          headerHeight={50}
          rowHeight={25}
          rowCount={data.length}
          rowGetter={({ index }) => data[index]}
          sortDirection={this.state.sortDirection}
          ref={this.Table}
          sort={(d)=> {
            data = (this.state.asc === true) ? data.sort(dynamicSort(d.sortBy)) : data.sort(dynamicSort(d.sortBy)).reverse();
            this.setState({ data: data, asc: !this.state.asc })
          }}
          >
        <Column
          label='ticker'
          dataKey='symbol'
          width={this.state.width * this.state.stylesheet['symbol']}
          />
        <Column
          label='company'
          dataKey='name'
          width={this.state.width * this.state.stylesheet['name']}
          />
        <Column
          label='lastSalePrice'
          dataKey='lastSalePrice'
          width={this.state.width * this.state.stylesheet['lastSalePrice']}
          />
        <Column
          label='tick'
          dataKey='tick'
          width={this.state.width * this.state.stylesheet['tick']}
          cellRenderer ={({ cellData }) => <div style={{backgroundColor: perc2color(cellData), width: "1em", height: "1em"}}></div>}
          />
        <Column
          label='bidSize'
          dataKey='bidSize'
          width={this.state.width * this.state.stylesheet['bidSize']}
          />
        <Column
          label='askSize'
          dataKey='askSize'
          width={this.state.width * this.state.stylesheet['askSize']}
          />
        <Column
          label='volume'
          dataKey='volume'
          width={this.state.width * this.state.stylesheet['volume']}
          />
        </Table>
      )
    }
    else {
      return (<div className={this.props.className} ref={this.Table} ></div>);
    }
  }
}


function perc2color(perc) {
	var r, g, b = 0;
	if(perc < .50) {
		r = 255;
		g = Math.round(5.1 * perc);
	}
	else {
		g = 255;
		r = Math.round(510 - 5.10 * perc);
	}
	var h = r * 0x10000 + g * 0x100 + b * 0x1;
	if (perc === 0) { return "none" }
  else { return '#' + ('000000' + h.toString(16)).slice(-6) };
}

function dynamicSort(property) {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}



//https://github.com/bvaughn/react-virtualized/issues/817
