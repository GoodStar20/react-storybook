"use strict";

console.log("App.js is running");

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    { id: "food", className: "runtime" },
    "This is a simple heading"
  ),
  React.createElement(
    "p",
    null,
    "This is a JSX Nano paragraph"
  )
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
