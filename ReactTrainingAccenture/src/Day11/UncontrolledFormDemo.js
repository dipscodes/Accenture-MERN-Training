import React from "react";

class UnControlledFormDemo extends React.Component {
  constructor() {
    super();

    this.updateSubmit = this.updateSubmit.bind(this);

    this.input = React.createRef();
  }

  updateSubmit(event) {
    alert("input submitted successfully");
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.updateSubmit}>
        <h1>UnControlled Form Demo</h1>

        <label>
          Name: <input type="text" ref={this.input} />
        </label>

        <label>
          <input type="submit" value="Submit" />
        </label>
      </form>
    );
  }
}

export default UnControlledFormDemo;
