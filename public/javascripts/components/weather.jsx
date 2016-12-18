import React from "react";
import ReactDOM from "react-dom";


export default class Weather extends React.Component {
  handleSearchChange(e){
    console.log('pop');
    this.props.handleSearchChange(e);
  }
  render() {
    return (
        <div id="weather-box">
	　　<div className="row">
            <div className="inner-box col-md-4 col-md-offset-4">
              <div id="w-app" className="title text-center">Your Local Weather</div>
	      <div className="info-box text-center">
		<div className="">
		  <div className="input-group">
		    <input type="text" id="orange-bar" onChange={this.handleSearchChange.bind(this)} value={this.props.search} className="form-control city-input" aria-describedby="basic-addon1"  placeholder="Enter your city..." />
		    <span id="orange-button" className="input-group-addon" onClick={this.props.oC} id="basic-addon1">Go</span>
		  </div>
		</div>
                <div className="text-center">{this.props.name}</div>
	        <div className="text-center">{this.props.weather}</div>
	        <div className="text-center">{this.props.temperature}</div><div className="circle-btn　text-center" onClick={this.props.handleClick} >{this.props.unit}</div>
	  　　    <div className="text-center"><img id="weather-img" src={this.props.bg} /></div>
	      </div>
	    </div>
	  </div>
        </div>
    );
  }
}
