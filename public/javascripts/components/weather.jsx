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
            <div className="inner-box col-md-4 col-md-offset-4">
              <div id="w-app" className="title text-center">Your Local Weather</div>
	      <div className="info-box">
		<div className="">
		  <div className="input-group">
		    <input type="text" className="form-control city-input" aria-describedby="basic-addon1"  placeholder="Enter your city..." />
		    <span className="input-group-addon" onClick={this.props.oC} id="basic-addon1">Go</span>
		  </div>
		</div>
                <div className="text-center">{this.props.name}</div>
	        <div className="text-center">{this.props.weather}</div>
	        <div className="text-center">{this.props.temperature}</div>
	  　　    <div className="text-center"><img id="weather-img" src={this.props.bg} /></div>
	      </div>
	    </div>
	  </div>
        </div>
    );
  }
}
