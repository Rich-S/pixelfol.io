import React from 'react';
import SearchWidgetContainer from './searchWidgetContainer';

class WidgetContainer extends React.Component {
  constructor(props) {
    super(props);
    this.Widget = React.createRef();
  }
  componentDidMount() {
    this.setState({ width: this.Widget.current.clientWidth, height: this.Widget.current.clientHeight })
  }
  render() {
    const inheritedDimensions = this.state;
    if (inheritedDimensions) {
      return (
        <div className={this.props.className} ref={this.Widget}>
          <SearchWidgetContainer id="search-widget-container" width={this.state.width} />
        </div>
      )
    }
    else {
      return (<div className={this.props.className} ref={this.Widget} ></div>);
    }
  }
}

export default WidgetContainer;
