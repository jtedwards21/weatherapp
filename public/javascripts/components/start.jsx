import React from "react";
import Weather from "./weather";
import axios from "axios";
import ReactDOM from "react-dom";

var onChange = function(data){
  ReactDOM.render(<Weather data={data}/>, document.getElementById("content"));
}

export default class Start extends React.Component {
  getWeather(city){
    var url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=92ce1e2eee7c91cb43470cada0b7c4d8";
    axios.get(url)
    .then(data => onChange(data));
  }
  render() {
　　　　this.getWeather(this.props.city)
    return (
      
      <div>
      </div>
    );
  }
}
