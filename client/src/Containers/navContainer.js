import React from 'react';
import { Navbar } from 'react-materialize';
import './navContainer.css';

class NavContainer extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Navbar brand={this.props.brand} right></Navbar>
    )
  }
}

export default NavContainer;
