import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import Home from "./Home";
import Product from "./Product";
import AboutUs from "./AboutUs";
import ThumsUp from "./ThumsUp";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <App /> */}
      <Route path="/" component={App} />
      {/* <Route path='/NavigationBar' component={NavigationBar} /> */}
      <Route path="/Home" component={Home} />
      <Route path="/Product" component={Product} />
      <Route path="/AboutUs" component={AboutUs} />
      <Route path="/AboutUs/ThumbsUp/:pid" component={ThumsUp} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
