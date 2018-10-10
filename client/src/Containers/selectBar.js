import React from 'react';
import Select from 'react-select';
import symbolsActions from '../Actions/symbolsActions';
const fundHoldings = require('../assets/fundHoldings.json');

class SelectBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: null,
    };
    this.handleChange = this.handleChange.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
  }
  handleSubmit(event) {
    if(event.keyCode === 13) {
      let text = this.state.text;
      this.setState({ text: "" }, symbolsActions.addNewItem(text))
    }
  }
  render() {
    const { selectedOption } = this.state;
    return (
      <Select
        id={this.props.id}
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
        width={200}
      />
    );
  }
}

export default SelectBar;
