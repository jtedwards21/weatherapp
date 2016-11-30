import React from "react";
import Weather from "./weather";
import axios from "axios";
import ReactDOM from "react-dom";


export default class Start extends React.Component {
　　constructor(props) {
    super(props);

    this.state = {
      city: "--",
      name: "--",
      weather: "--",
      description: "--",
      country: "--",
      temperature: 0,
      bg: "blank"
    };

    this.updated = false;

  }
  componentDidMount(){
　　　　var city = this.props.city;
    var url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=92ce1e2eee7c91cb43470cada0b7c4d8";
    axios.get(url)
    .then(data => {this.processData(data).bind(this)});
  }
  processData(data){
    console.log(data);
    var name = data.data.name
    var weatherObject = data.data.weather[0];
    var weather = weatherObject.main;
    console.log(weather);
    var description = weatherObject.description;
    var country = data.data.sys.country;
    var temperature = data.data.main.temp;
    this.setState({name:name, weather:weather, description:description, country:country, temperature:temperature, bg: weather});
  }
  updateCity() {
    console.log('dog');
  }
  render() {
    return (
      <Weather name={this.state.name} weather={this.state.weather} description={this.state.description} country={this.state.country} temperature={this.state.temperature} bg={this.state.bg} oC={this.updateCity.bind(this)} />
    );
  }
}
