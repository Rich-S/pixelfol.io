import React from 'react';
import SymbolsStore from '../Stores/symbolsStore';
import symbolsActions from '../Actions/symbolsActions';
import Symbols from '../Components/symbols';

class SymbolsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        items: SymbolsStore.getAllItems()
    };
    this._onChange = this._onChange.bind(this);
    this._onClick = this._onClick.bind(this);
  }
  _onClick(symbol) {
    symbolsActions.removeItem(symbol, () => this.setState({ items: SymbolsStore.getAllItems() }));
  }
  _onChange() {
    this.setState({ items: SymbolsStore.getAllItems() });
  }
  componentWillMount() {
    SymbolsStore.addChangeListener(this._onChange);
  }
  componentWillUnmount() {
    SymbolsStore.removeChangeListener(this._onChange);
  }
  render() {
    return (
      <section>
        <Symbols
          items={this.state.items}
          _onClick={this._onClick}
          />
      </section>
    )
  }
}

export default SymbolsContainer;
