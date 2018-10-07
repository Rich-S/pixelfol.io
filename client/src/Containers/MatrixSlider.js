import React, { Component } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./matrixSlider.css";

import MatrixContainer from './matrixContainer';

class MatrixSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      settings: {
        dots: true,
        lazyLoad: true,
        arrows: false,
        adaptiveHeight: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    this.Slider = React.createRef();
  }
  componentDidMount() {
    this.setState({width: this.Slider.current.clientWidth, height: this.Slider.current.clientHeight});
  }
  render() {
    const inheritedDimensions = this.state.width;
    if (inheritedDimensions) {
      return (
        <div className={this.props.className} ref={this.Slider}>
          <Slider id={'slider'} {...this.state.settings}>
            <div>
              <MatrixContainer gridColor={"blue"} width={this.state.width} height={this.state.height}/>
            </div>
            <div>
              <MatrixContainer gridColor={"yellow"} width={this.state.width} height={this.state.height}/>
            </div>
            <div>
              <MatrixContainer gridColor={"purple"} width={this.state.width} height={this.state.height}/>
            </div>
            <div>
              <MatrixContainer gridColor={"orange"} width={this.state.width} height={this.state.height}/>
            </div>
            <div>
              <MatrixContainer gridColor={"black"} width={this.state.width} height={this.state.height}/>
            </div>
            <div>
              <MatrixContainer gridColor={"white"} width={this.state.width} height={this.state.height}/>
            </div>
          </Slider>
        </div>
      )
    }
    else {
      return (<div className={this.props.className} ref={this.Slider} ></div>);
    }
  }
};

export default MatrixSlider;
