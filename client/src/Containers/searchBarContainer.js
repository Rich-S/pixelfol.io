import React from 'react';
import symbolsActions from '../Actions/symbolsActions';

class SearchBarContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({text: event.target.value});
  }
  handleSubmit(event) {
    if(event.keyCode === 13) {
      let text = this.state.text;
      symbolsActions.addNewItem(text, () => this.setState({ text: "" }));
    }
  }
  render() {
    return (
      <div id={this.props.id}>
        <input type="text" value={this.state.text} onKeyDown={this.handleSubmit} onChange={this.handleChange} placeholder="Find Funds..." />
      </div>
    );
  }
}

export default SearchBarContainer;
