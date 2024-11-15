import React from "react";

class ChildDemo extends React.Component {
  componentWillUnmount() {
    alert("the component named Hello World is about to be unmounted");
  }

  render() {
    return <h2>Hello World from child component</h2>;
  }
}

export default ChildDemo;
