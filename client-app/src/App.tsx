import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { Header } from "semantic-ui-react";

interface IWeather {
  temperatureC: number;
  temperatureF: number;
  summary: string;
}

class App extends Component {
  state = {
    weathers: [],
  };
  componentDidMount() {
    this.getWeaether();
  }
  getWeaether = async () => {
    let res = await axios.get("http://localhost:5000/WeatherForecast");
    this.setState({
      weathers: res.data,
    });
  };
  render = () => {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Header as="h1">Hi Semantic UIs</Header>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ul>
              {this.state.weathers.map((value: IWeather) => (
                <div>
                  <li>{value.temperatureC} "C"</li>
                  <li>{value.temperatureF} "F"</li>
                  <li>{value.summary}</li>
                </div>
              ))}
            </ul>
          </a>
        </header>
      </div>
    );
  };
}

export default App;
