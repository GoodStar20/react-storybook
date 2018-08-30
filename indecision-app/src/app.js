console.log("App.js is running");

var template = (
  <div>
    <h1 id="food" className="runtime">This is a simple heading</h1>
    <p>This is a JSX Nano paragraph</p>
  </div>
);

var appRoot = document.getElementById("app");



ReactDOM.render(template, appRoot);
