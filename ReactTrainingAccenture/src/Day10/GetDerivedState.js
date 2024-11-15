import React from "react";

class GetDerivedState extends React.Component {
  constructor(props) {
    super(props);

    this.state = { favoriteColor: "red" };
  }

  render() {
    return (
      <>
        <h1>getDerivedState From Props Example</h1>
        <h2>favoriteColor is {this.state.favoriteColor}</h2>
      </>
    );
  }

  static getDerivedStateFromProps(props) {
    return { favoriteColor: props.fcolor };
  }
}

export default GetDerivedState;
