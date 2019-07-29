import React from "react";
import ReactDOM from "react-dom";
import "./main.scss";

const title = "React with Webpack and Babel and";

ReactDOM.render(<div>{title}</div>, document.getElementById("app"));

module.hot.accept();
