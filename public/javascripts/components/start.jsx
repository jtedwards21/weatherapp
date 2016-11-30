import React from "react";
import Weather from "./weather";
import axios from "axios";
import ReactDOM from "react-dom";


export default class Start extends React.Component {
　　constructor(props) {
    super(props);

    this.state = {
      city: "",
      name: ""
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
    var name = data.data.name
    this.setState({name:name});
  }
  updateCity() {
    console.log('dog');
  }
  render() {
    return (
      <Weather name={this.state.name} oC={this.updateCity.bind(this)} />
    );
  }
}
