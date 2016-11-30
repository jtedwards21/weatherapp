import React from "react";
import ReactDOM from "react-dom";
import Start from "./start";

var onChange = function(city){
  ReactDOM.render(<Start city={city}/>, document.getElementById("content"));
}

export default class Weather extends React.Component {
  constructor() {
    super();

    this.state = {
    };
  }
  getMainWeather(){
    var d = this.props.data;
    var main = d.weather[0];
    var mainWeather = main.main;
  }
  getTemp(){
    var d = this.props.data;
    var base = d.base;
    var temperature = base.main.temp;
  }
  updateCity(){
	//TO DO
  }
  render() {
    return (
      <div className="background-container">
        <div className="weather-box">
          <div className="title">Your Local Weather</div>
	  <div className="info-box">
	    <div>{this.getMainWeather(this)}</div>
	    <div>{this.getTemp.bind(this)}</div>
	  </div>
          <input className="city-input" placeholder="Enter your city..." />
	  <div className="go-btn" onClick={this.updateCity.bind(this)}>Go</div>
        </div>
	<div id="background" className={this.getMainWeather.bind(this)}></div>
      </div>
    );
  }
}
