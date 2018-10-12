import React from 'react';
import symbolsActions from '../Actions/symbolsActions';
import { Autocomplete, Navbar, NavItem, Row } from 'react-materialize';
import fundHoldings from '../assets/fundHoldings.json';

class SelectContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "", data: this.hashify(fundHoldings) };
    this.onSelect = this.onSelect.bind(this);
  }
  onSelect(event) {
    symbolsActions.addNewItem(event.target.value)
  }
  hashify(obj) {
    let hash = {};
    Object.keys(obj).forEach(d=>hash[d]=null);
    return hash;
  }
  render() {
    return (
      <Row id={this.props.id}>
        <Autocomplete
          placeholder='Find Funds'
          data={this.state.data}
          onSelect={this.onSelect} />
      </Row>
    );
  }
}

export default SelectContainer;
