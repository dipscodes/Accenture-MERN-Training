import React from "react";

class GetSnapShotBeforeUpdateDemo extends React.Component {
  constructor() {
    super();

    this.state = {
      favoritecolor: "Red",
      previousColor: "Blue",
    };
  }
  s;

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // Capture the previous state before the update
    return prevState.favoritecolor;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // Update the previous Color in the state using the snapshot
    if (snapshot !== this.state.favoritecolor) {
      this.setState({ previousColor: snapshot });
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoritecolor: "Green" });
    }, 5000);
  }

  render() {
    return (
      <div>
        <h1>GetSnapShot</h1>

        <h2>My Favorite Color is {this.state.favoritecolor}</h2>

        <div id="div1"></div>

        <div id="div2">
          The updated favorite is {this.state.favoritecolor}.<br /> Before the
          update, the favorite was {this.state.previousColor}.
        </div>
      </div>
    );
  }
}

export default GetSnapShotBeforeUpdateDemo;
