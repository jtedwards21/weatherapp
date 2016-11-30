import React from "react";

var appKey="92ce1e2eee7c91cb43470cada0b7c4d8"

var onChange = function(mainWeather, temperature){
  <Weather mainWeather={mainWeather} temperature={temperature}/>
}

export default class Weather extends React.Component {
  constructor() {
    super();

    this.state = {
    };
  }
  processWeatherData(d){
    var main = d.weather[0];
    var mainWeather = main.main;
    var base = d.base;
    var temperature = base.main.temp;
    onChange(mainWeather, temperature)
  }
  getWeather(city){
    var url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=92ce1e2eee7c91cb43470cada0b7c4d8";
    axios.get(url)
    .then(data => this.processWeatherData(data));
  }
  render() {
    return (
      <div className="background-container">
        <div className="weather-box">
          <div className="title">Your Local Weather</div>
	  <div className="info-box">
	    <div>{this.props.mainWeather}</div>
	    <div>{this.props.temperature}</div>
	  </div>
          <input className="city-input" placeholder="Enter your city..." />
	  <div className="go-btn">go</div>
        </div>
	<div id="background" className={this.props.mainWeather}></div>
      </div>
    );
  }
}
