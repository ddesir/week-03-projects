import React, { Component } from 'react'; // Default import and named import
import logo from './logo.svg';
import './App.css';


function City(props) {
  return (
  	<div>
  		<p>{ props.city }, { props.state }</p>
  		<ul>
  	</div>
  );
}

function ZipSearchField(props) {
  return (
  	<form>
  		<label>
  			Zip Code: 
  			<input type='text' name='zipcode' onChange={ props.onChange } required />
  		</label>
  	</form>);
}


class App extends Component {
	state = {
		cities: [],
		errorMessage: '',
		zipCode: ''
	};
	
	onZipChange = async event => {
		const zipCode = event.target.value;
		this.setState({ zipCode: zipCode });
		
		if (zipCode.length === 5) {
			const response = await fetch (
				`http://ctp-zip-api.herokuapp.com/zip/${zipCode}`
			);
			
			if (response.status === 404) {
				this.setState({ errorMessage: 'Not Found!' });
			}
			
			const cities = await response.json();
			this.setState({ cities: cities });
		}
	};
	
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Zip Code Search</h2>
        </div>
        <ZipSearchField onChange = { this.onZipChange } />
        <div>
        	{this.state.cities.map(city => {
        		return (
        			<City
        				key = { city.RecordNumber }
        				city = { city.City }
        				state = { city.State }
        			/>
        		);
        	})}
        </div>
        { this.state.errorMessage }
      </div>
    );
  }
}

export default App;
