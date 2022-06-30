import React from "react";
import ReactDOM from "react-dom";
// import Heading from "./Heading.jsx"; // In ES6, jsx file extension is optional
import App from "./components/App";

ReactDOM.render(
  // Not a recommended practice
  // <div>
  //   {/* <Heading></Heading> // Not a recommended practice */}
  //   <Heading />
  //   <List />
  // </div>,
  <App />, // Best practice
  document.getElementById("root")
);
