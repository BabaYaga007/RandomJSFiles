import { Component } from "react";
import "./NavigationBar.css";

export default class ThumsUp extends Component {
  render() {
    return (
      <div className="thumbsUpDiv">
        <p>
          Thanks for the likes!
          <br />
          Product Id: {this.props.match.params.pid}
        </p>
        {console.log("I will run!" + JSON.stringify(this.props.match))}
      </div>
    );
  }
}
