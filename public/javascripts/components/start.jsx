import React from "react";
import Weather from "./weather";
import axios from "axios";
import ReactDOM from "react-dom";


export default class Start extends React.Component {
　　constructor(props) {
    super(props);

    this.state = {
      city: "",
      data: []
    };

    this.updated = false;

  }
  componentDidMount(){
　　　　var city = this.props.city;
    var url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=92ce1e2eee7c91cb43470cada0b7c4d8";
    axios.get(url)
    .then(data => {this.setState({data:data});
       });
  }
  updateCity() {
    console.log('dog');
  }
  render() {
    return (
      <Weather data={this.state.data} oC={this.updateCity.bind(this)} />
    );
  }
}
