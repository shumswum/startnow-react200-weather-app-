import React from "react";
import axios from "axios";
import { updateNewCall, updateInput } from "./actionSearch";

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      myInput: ""
    };

    this.handleMyInput = this.handleMyInput.bind(this);
    this.handleApiCall = this.handleApiCall.bind(this);
    this.handleButtonLine = this.handleButtonLine.bind(this);
  }

  handleMyInput(event) {
    const { dispatch } = this.props;
    dispatch(updateInput(event.target.value));
  }

  handleButtonLine(cityName) {
    const { dispatch } = this.props;

    const ApiCall = {
      type: "NEW_CALL",
      payload: axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=1439d91e47a48294390f03779b2462e9&units=imperial`
      )
    };

    dispatch(ApiCall);
  }

  handleApiCall() {
    const { dispatch, myInput } = this.props;

    const ApiCall = {
      type: "NEW_CALL",
      payload: axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${myInput}&APPID=1439d91e47a48294390f03779b2462e9&units=imperial`
      )
    };

    dispatch(ApiCall);
  }

  render() {
    const { myInput } = this.props;
    return (
      <div>
        <div>
          <button onClick={() => this.handleButtonLine("San Diego")} className="san-diego btn">San Diego</button>
          <button onClick={() => this.handleButtonLine("New York")} className="button-between btn">New York</button>
          <button onClick={() => this.handleButtonLine("Washington D.C")} className="button-between btn">Washington D.C</button>
          <button onClick={() => this.handleButtonLine("London")} className="button-between btn">London</button>
          <button onClick={() => this.handleButtonLine("Tokyo")} className="tokyo btn">Tokyo</button>
        </div>
        <div className="input-group">
          <input
            onChange={event => this.handleMyInput(event)}
            type="text"
            className="form-control"
            placeholder="Search for..."
            value={myInput}
          />
          <span className="input-group-btn">
            <button
              onClick={this.handleApiCall}
              className="btn btn-secondary"
              type="button"
            >
              <strong>Go!</strong>
            </button>
          </span>
        </div>
      </div>
    );
  }
}

export default Search;
