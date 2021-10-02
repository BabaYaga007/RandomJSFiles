import { Component } from "react";
import "./App.css";
import "./NavigationBar.css";
import { FaThumbsUp } from "react-icons/fa";
import { Link } from "react-router-dom";

export default class AboutUs extends Component {
  render() {
    let product = {
      pid: Math.floor(Math.random() * 100) + 1,
    };
    return (
      <div className="myNavDivData">
        <p>My name is Gaurang Bhardwaj</p>
        <p>I am a website developer</p>
        <p>
          <Link to={`/AboutUs/ThumbsUp/${product.pid}`}>
            <FaThumbsUp />
          </Link>
        </p>
      </div>
    );
  }
}
