import React from "react";

class ShouldComponentUpdateDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favoriteColor: "red" };
  }

  shouldComponentUpdate() {
    return true;
  }

  changeColor = () => {
    this.setState({ favoriteColor: "blue" });
  };

  render() {
    return (
      <>
        <h1>Should Component Update Demo</h1>

        <h2>favoriteColor is {this.state.favoriteColor}</h2>

        <button type="button" onClick={this.changeColor}>
          Change Color
        </button>
      </>
    );
  }
}

export default ShouldComponentUpdateDemo;
