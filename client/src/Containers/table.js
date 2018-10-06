import React from 'react';
import { Column, Table } from 'react-virtualized';
import './table.css';
import SymbolsStore from '../Stores/symbolsStore';
import 'react-virtualized/styles.css'


export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: SymbolsStore.getAllItems(),
      asc: true
    }
    this._onChange = this._onChange.bind(this);
  }
  _onChange() {
    this.setState({ data: SymbolsStore.getAllItems().map(d=>{return {symbol: d}}), });
  }
  componentWillMount() {
    SymbolsStore.addChangeListener(this._onChange);
  }
  componentWillUnmount() {
    SymbolsStore.removeChangeListener(this._onChange);
  }
  render() {
    let data = this.state.data;
    console.log(data)
    return (
      <div>
        <Table
          className={'spark-table'}
          width={500}
          height={600}
          headerHeight={50}
          rowHeight={25}
          rowCount={data.length}
          rowGetter={({ index }) => data[index]}
          sortDirection={this.state.sortDirection}
          //sortDirection={this.state.sortDirection}
          >
          <Column
            label='ticker'
            dataKey='symbol'
            width={100}
            />
          <Column
            label='company'
            dataKey='name'
            width={300}
            />
        </Table>
      </div>
    )
  }

}
/*
export default (props) => {
  let data = props.data;
  function sort ({ sortBy, sortDirection }) {
    this.setState({ sortBy, sortDirection })
  }
  return (
    <div>
      <Table
        className={'spark-table'}
        width={1600}
        height={800}
        headerHeight={50}
        rowHeight={200}
        rowCount={data.length}
        rowGetter={({ index }) => props.data[index]}
        sort={(d)=> { data = dynamicSort('ticker')})

        //sortDirection={this.state.sortDirection}
        >
        <Column
          label='ticker'
          dataKey='ticker'
          width={100}
          />
        <Column
          label='company'
          dataKey='name'
          width={300}
          />
        <Column
          label='hpr'
          dataKey='trend'
          width={50}
          />
        <Column
          label='max hpr'
          dataKey='max_hpr'
          width={100}
          />
        <Column
          label='max win streak'
          dataKey='lis'
          width={200}
          />
        <Column
          label='days'
          dataKey='lis_streak'
          width={50}
          />
        <Column
          label='max loss streak'
          dataKey='lds'
          width={200}
          />
        <Column
          label='days'
          dataKey='lds_streak'
          width={50}
          />
        <Column
          label='chart'
          dataKey='sparks'
          cellRenderer ={({ cellData }) => <Sketch imgURL={cellData} />}
          width={500}
          />
      </Table>
    </div>
  )
}
*/
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
