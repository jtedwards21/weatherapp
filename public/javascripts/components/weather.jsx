import React from "react";
import ReactDOM from "react-dom";


export default class Weather extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };

  }
  //Write a componentDidMount instead of playing with these functions
  
  render() {
    return (
        <div id="weather-box">
	　　<div className="row">
            <div className="inner-box col-md-6 col-md-offset-3">
              <div className="title text-center">Your Local Weather</div>
	      <div className="info-box">
                <div className="text-center">{this.props.name}</div>
	        <div className="text-center">{this.props.weather}</div>
	        <div className="text-center">{this.props.temperature}</div>
		<div className="text-center"><input className="city-input" placeholder="Enter your city..." /></div>
		<div className="text-center go-btn" onClick={this.props.oC}>Go</div>
	  　　    <div className="text-center"><img id="weather-img" src={this.props.bg} /></div>
	      </div>
	    </div>
	  </div>
        </div>
    );
  }
}
