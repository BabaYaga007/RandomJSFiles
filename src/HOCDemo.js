import { Component } from "react";
import "./HOCDemo.css";

const OriginalComponent = () => {
  let myLayout = null;
  let handleClick = (e) => {
    myLayout = <p className="clickP">You clicked!</p>
  }
  return (
    <div style={{ backgroundColor: "orange" }}>
      <p>This is from Original Component</p>
      {myLayout}
      <button
        style={{ backgroundColor: "black", color: "white" }} class="btn" onClick={(e) => handleClick(e)}>
        Click me
      </button>
    </div>
  );
};

let ModifiedComponent = (OC) =>
  class extends Component {
    render() {
      return (
        <div style={{ backgroundColor: "blue" }}>
          <p>This is form Modified Component</p>
          <OC />
          <br />
        </div>
      );
    }
  };
let ColoredButton = ModifiedComponent(OriginalComponent);

class HOCDemo extends Component {
  render() {
    return (
      <div className="hocDiv">
        <OriginalComponent />
        <br />
        <ColoredButton />
      </div>
    );
  }
}

export default HOCDemo;
