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
        centerMode: true,
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
              <h2 style={{color: "blue"}}>Mega Cap</h2>
              <MatrixContainer cap={'mega'} gridColor={"blue"} width={this.state.width} height={this.state.height}/>
            </div>
            <div>
              <h2 style={{color: "gainsboro"}}>Large Cap</h2>
              <MatrixContainer cap={'large'} gridColor={"gainsboro"} width={this.state.width} height={this.state.height}/>
            </div>
            <div>
              <h2 style={{color: "purple"}}>Mid Cap</h2>
              <MatrixContainer cap={'mid'} gridColor={"purple"} width={this.state.width} height={this.state.height}/>
            </div>
            <div>
              <h2 style={{color: "orange"}}>Small Cap</h2>
              <MatrixContainer cap={'small'} gridColor={"orange"} width={this.state.width} height={this.state.height}/>
            </div>
            <div>
              <h2 style={{color: "green"}}>Micro Cap</h2>
              <MatrixContainer cap={'micro'} gridColor={"green"} width={this.state.width} height={this.state.height}/>
            </div>
            <div>
              <h2 style={{color: "blueviolet"}}>Nano Cap</h2>
              <MatrixContainer cap={'nano'} gridColor={"blueviolet"} data={localStorage.nano} width={this.state.width} height={this.state.height}/>
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
