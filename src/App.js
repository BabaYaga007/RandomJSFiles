import logo from "./logo.svg";
import "./App.css";
import Parent from "./Parent";
import OneWay from "./OneWay";
import TwoWay from "./TwoWay";
import HOCDemo from "./HOCDemo";
import NavigationBar from "./NavigationBar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}<br />
        <Parent />
        <OneWay />
        <br />
        <TwoWay />
        <br />
        <HOCDemo />
        <NavigationBar /><br /><br /><br />
        {/* <oneWay /> */}
      </header>
    </div>
  );
}

export default App;
