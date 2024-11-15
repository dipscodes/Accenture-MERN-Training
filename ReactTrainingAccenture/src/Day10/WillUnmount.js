import React from "react";
import ChildDemo from "./ChildDemo";

class WillUnMount extends React.Component {
  constructor() {
    super();
    this.state = { show: true };
  }
  delHeader = () => {
    this.setState({ show: false });
  };
  render() {
    let myheader;
    if (this.state.show) {
      myheader = <ChildDemo />;
    }
    return (
      <>
        <h1>WillUnMount Demo</h1>
        {myheader}
        <button type="button" onClick={this.delHeader}>
          Delete Header
        </button>
      </>
    );
  }
}
export default WillUnMount;
