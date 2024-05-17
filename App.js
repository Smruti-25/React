import React from "react";
import ReactDOM from "react-dom";

const someElement = <h2>some element</h2>
const Title = () => <h1>Page Title</h1>
const HeaderComponent = () => (
  <div id="container">
    <Title />
    {someElement}
    <h1>Header Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);