import React from 'react';
import Select from 'react-select';

const options = Object.keys(require('../assets/fundHoldings.json')).map(d=>{
  return { value: d, label: d }
});

class SelectBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedOption: null,
    }
  }
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  }
  render() {
    const { selectedOption } = this.state;

    return (
      <Select
        id={this.props.id}
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
      />
    );
  }
}

export default SelectBar;
