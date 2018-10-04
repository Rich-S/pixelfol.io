import React from 'react';

class GridContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = { toggle: false }
  }
  render() {
    return (
      <div
        style={this.props.style}
      >
        
      </div>
    )
  }
}

export default GridContainer;
