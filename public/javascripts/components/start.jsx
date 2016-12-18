import React from "react";
import Weather from "./weather";
import axios from "axios";
import ReactDOM from "react-dom";


export default class Start extends React.Component {
　　constructor(props) {
    super(props);

    this.state = {
      search: "",
      city: "--",
      name: "--",
      weather: "--",
      description: "--",
      country: "--",
      temperature: 0,
      bg: "../img/Clear.png",
　　　　　　celcius: 0,
      fahrenheit: 0,
      unit: "C"
    };

    this.updated = false;

  }
  getDataFromCoord(lat, lon){
    var coordurl = "api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon;
    axios.get(url)
    .then(data => {this.processData(data).bind(this)});
  }
  componentDidMount(){
    navigator.geolocation.getCurrentPosition(function(position) {this.getDataFromCoord(position.coords.latitude, position.coords.longitude);});

　　　　var city = this.props.city;
    var url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=92ce1e2eee7c91cb43470cada0b7c4d8";
    /*axios.get(url)
    .then(data => {this.processData(data).bind(this)});*/
  }
  processData(data){
    console.log(data);
    var name = data.data.name
    var weatherObject = data.data.weather[0];
    var weather = weatherObject.main;
    var bg = "../img/" + weather + ".png";
    var description = weatherObject.description;
    var country = data.data.sys.country;
    var temperature = data.data.main.temp;
    var celcius = temperature - 273.15;
    var fahrenheit = celcius + 40;
    fahrenheit = fahrenheit * 1.8;
    this.setState({name:name, weather:weather, description:description, country:country, temperature:temperature, bg: bg, celcius: celcius, fahrenheit: fahrenheit});
  }
  handleSearchChange(e){
    this.setState({search: e.target.value});
  }
  updateCity() {
    var city = this.state.search;
    var url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=92ce1e2eee7c91cb43470cada0b7c4d8";
    axios.get(url)
    .then(data => {this.processData(data).bind(this)});
  }
  changeUnit() {
    if(this.state.unit == "C"){
      this.setState({unit: "F"});
    } else {
	this.setState({unit: "C"})
    }
  }
  render() {
    var setUnit;
    (this.state.unit == "C") ? setUnit = this.state.celcius : setUnit = this.state.fahrenheit;
    return (
      <Weather handleSearchChange={this.handleSearchChange.bind(this)} search={this.state.search} name={this.state.name} weather={this.state.weather} description={this.state.description} country={this.state.country} temperature={setUnit} unit={this.state.unit} handleClick={this.changeUnit.bind(this)} bg={this.state.bg} oC={this.updateCity.bind(this)} />
    );
  }
}
