import React from "react";
import Search from "../components/Search";
import History from "../components/History";
import CityInfo from "../components/CityInfo"

export default class App extends React.Component {
  render() {
    return (
      <div>
        <div className="jumbotron">
          <h1 className="display-4">Origin Weather Application</h1>
          <p className="lead">Always know if you'll need an umbrella!</p>
        </div>
        <Search/>
        <div className="both-panels">
          <CityInfo/>
          <History/>
        </div>
      </div>
    );
  }
}
