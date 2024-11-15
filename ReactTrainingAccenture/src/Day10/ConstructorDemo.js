import React from "react";

class ConstructorDemo extends React.Component {
  constructor() {
    super();
    this.state = { favoriteColor: "Red" };
  }

  render() {
    return (
      <>
        <h1>constructor & Render Methods</h1>

        <h2>favoriteColor is {this.state.favoriteColor}</h2>
      </>
    );
  }
}

export default ConstructorDemo;
