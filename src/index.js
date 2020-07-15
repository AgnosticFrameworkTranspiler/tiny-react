import React from "./react";
import "./react-dom";
import Counter from "./counter";

const Hello = ({ name }) => {
  console.log("--->", Hello.__props);
  console.log("--->", Hello.__vNode);
  return <p>Hello {name}!</p>;
};

const App = () => (
  <div>
    <h1 className="primary">Welcome to Tiny React</h1>
    <Hello name="Roy Lin" />
    <Counter />
  </div>
);

React.render(<App />, document.getElementById("root"));
