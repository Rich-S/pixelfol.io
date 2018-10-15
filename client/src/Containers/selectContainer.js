import React from 'react';
import { Autocomplete } from 'react-materialize';
import symbolsActions from '../Actions/symbolsActions';
import './selectContainer.css';
import fundHoldings from '../assets/fundHoldings.json';

class SelectContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { placeholder: 'Find Funds', data: this.hashify(fundHoldings) };
    this.onSelect = this.onSelect.bind(this);
  }
  onSelect(value) {
    symbolsActions.addNewItem(value);
  }
  hashify(obj) {
    let hash = {};
    Object.keys(obj).forEach(d=>hash[d]=null);
    return hash;
  }
  render() {
    return (
      <Autocomplete
        id={this.props.id}
        placeholder={this.state.placeholder}
        data={this.state.data}
        onAutocomplete={this.onSelect}
         />
    );
  }
}

export default SelectContainer;
