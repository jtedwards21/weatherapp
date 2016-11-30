import React from "react";
import ReactDOM from "react-dom";
import Start from "components/start";

var city = "Shanghai";

ReactDOM.render(<Start city={city} />, document.getElementById("content"));
