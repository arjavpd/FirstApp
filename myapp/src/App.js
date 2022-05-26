import React, {Component} from 'react';
import Ninjas from './Ninjas';

class App extends Component {
	render() {
		console.log(this.props); //use 'this.props' to access props
		return (
			<div className="App">
				<h1>My first React app</h1>
				<Ninjas name="AP" age="20" belt="Orange" />
				<Ninjas name="Tom" age="21" belt="Yellow" />
			</div>
		);
	}
}

export default App;
