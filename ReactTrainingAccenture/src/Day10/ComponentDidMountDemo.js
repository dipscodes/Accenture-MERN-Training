import React from "react";

class ComponentDidMountDemo extends React.Component {
  constructor() {
    super();

    this.state = { favoriteColor: "red" };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoriteColor: "orange" });
    }, 5000);
  }

  render() {
    return (
      <>
        <h1>ComponentDidMount Demo</h1>
        <h2>favoriteColor is {this.state.favoriteColor}</h2>
      </>
    );
  }
}

export default ComponentDidMountDemo;
