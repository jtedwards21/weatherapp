import React from "react";
import Weather from "./weather";
import axios from "axios";
import ReactDOM from "react-dom";
import jsonp from "jsonp";
import JQuery from "jquery";


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
  componentDidMount(){
    var that = this;
    JQuery.getJSON("http://ipinfo.io/json?callback=?", function(result){
   //response data are now in the result variable
       that.updateInfo(result.city).bind(that)
    });
  }
  updateInfo(city){
    var url = "/weather/" + city;
    console.log(city);
    axios.get(url)
    .then(data => {this.processData(data).bind(this)});
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
    var celcius = Math.round(temperature - 273.15);
    var fahrenheit = celcius + 40;
    fahrenheit = Math.round(fahrenheit * 1.8);
    this.setState({name:name, weather:weather, description:description, country:country, temperature:temperature, bg: bg, celcius: celcius, fahrenheit: fahrenheit});
  }
  handleSearchChange(e){
    this.setState({search: e.target.value});
  }
  updateCity() {
    var city = this.state.search;
    var url = "/weather/" + city;
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
    console.log(this.state.city);
    var setUnit;
    (this.state.unit == "C") ? setUnit = this.state.celcius : setUnit = this.state.fahrenheit;
    return (
      <Weather handleSearchChange={this.handleSearchChange.bind(this)} search={this.state.search} name={this.state.name} weather={this.state.weather} description={this.state.description} country={this.state.country} temperature={setUnit} unit={this.state.unit} handleClick={this.changeUnit.bind(this)} bg={this.state.bg} oC={this.updateCity.bind(this)} />
    );
  }
}
