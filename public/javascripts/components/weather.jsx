import React from "react";
import ReactDOM from "react-dom";
import Start from "./start";


var onChange = function(city, data){
  if(this.props.updated == false){
	var url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=92ce1e2eee7c91cb43470cada0b7c4d8";
        axios.get(url)
        .then(data => ReactDOM.render(<Weather data={data} city={city} updated={true} />, document.getElementById("content")););
  }
}

export default class Weather extends React.Component {
  constructor() {
    super();

    this.state = {
    };

    this.updated = false;
  }
  
  getMainWeather(){
　　　　if(this.props.data != undefined){
    var d = this.props.data;
    var main = d.weather[0];
    var mainWeather = main.main;}
  }
  getTemp(){
    if(this.props.data != undefined){
    var d = this.props.data;
    var base = d.base;
    var temperature = base.main.temp;}
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
	    <div>{(this.) ? this.state.mainWeather : "--"}</div>
	    <div>{(this.getTemp.bind(this)) ? this.state.temperature : "--"}</div>
	  </div>
          <input className="city-input" placeholder="Enter your city..." />
	  <div className="go-btn" onClick={this.updateCity.bind(this)}>Go</div>
        </div>
	<div id="background" className={(this.props.updated) ? this.getTemp.bind(this) : "blue" }></div>
      </div>
    );
  }
}
