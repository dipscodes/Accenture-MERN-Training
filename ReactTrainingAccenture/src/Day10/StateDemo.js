import React from "react";

class StateDemo extends React.Component {
  constructor() {
    super();

    this.state = { Person_Id: 100011 };
  }

  changePersonId = () => {
    this.setState({
      Person_Id: (this.state.Person_Id = 6000),
    });
  };

  render() {
    return (
      <>
        <h1>State Demo</h1>
        <p>Old Id: {this.state.Person_Id}</p>
        <button onClick={this.changePersonId}>New Id</button>
      </>
    );
  }
}

export default StateDemo;
