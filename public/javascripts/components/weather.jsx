import React from "react";
import ReactDOM from "react-dom";


export default class Weather extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      
    };

  }
  
  getMainWeather(){
　　　　if(this.props.data.length == 0){
    　　var d = this.props.data;
    　　var main = d.weather[0];
    　　return mainWeather = main.main;
    } else {
    　　return "--";
    }
  }  
  getBackground(){
    if(this.props.data.length == 0){
      var d = this.props.data;
      var main = d.weather[0];
      return mainWeather = main.main;
    } else{
      return "blue";
    }
  }
  getTemp(){
    if(this.props.data.length == 0){
      var d = this.props.data;
      var base = d.base;
      return temperature = base.main.temp;
    } else {
      return "--";
    }
  }
  render() {
    return (
      <div className="background-container">
        <div className="weather-box">
          <div className="title">Your Local Weather</div>
	  <div className="info-box">
	    <div>{this.getMainWeather.bind(this)}</div>
	    <div>{this.getTemp.bind(this)}</div>
	  </div>
          <input className="city-input" placeholder="Enter your city..." />
	  <div className="go-btn" onClick={this.props.oC}>Go</div>
        </div>
	<div id="background" className={this.getBackground.bind(this)}></div>
      </div>
    );
  }
}
