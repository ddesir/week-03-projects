import React, { Component } from 'react';
import './App.css';

const ZipCode = (props) => {
  return (
    <div>
      <div className = 'card-column'>
        <div className = 'card'>
          <h2 className = 'card-header'></h2>
        </div>
      </div>
    </div>
  );
}

const CitySearchField = (props) => {
  return (
    <form>
      <label>
        Zip Code:
        <input type = 'text' name = 'city' onKeyDown = { props.onKeyDown } required />
      </label>
    </form>
  );
}

class App extends Component {
  state = {
    zipCodes: [],
    states: [],
    errorMessage: ''
  }

  render() {
    return (
      <CitySearchField />
    );
  }
}

export default App;
