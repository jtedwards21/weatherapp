import React from "react";
import Weather from "./weather";

export default class Start extends React.Component {
  getWeather(city){
    var url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=92ce1e2eee7c91cb43470cada0b7c4d8";
    axios.get(url)
    .then(data => this.processWeatherData(data));
  }
  render() {
    return (
      
      <div>
        <Weather data={this.getWeather(this.props.city)}/>
      </div>
    );
  }
}
