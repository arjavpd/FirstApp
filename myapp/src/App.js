import React, {Component} from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

class App extends Component {
	state = {
		ninjas: [
			{name: 'Ryu', age: 30, belt: 'black', id: 1},
			{name: 'Yoshi', age: 20, belt: 'green', id: 2},
			{name: 'Crystal', age: 25, belt: 'pink', id: 3},
		],
	};
	addNinja = newNinja => {
		//Store what ever returns from function 'addNinja' to 'newNinja'
		//Bad practice to change states directly, lets make a copy of array and use set state
		newNinja.id = Math.random();
		let ninjasCopy = [...this.state.ninjas, newNinja]; //Spread operator
		this.setState({
			ninjas: ninjasCopy,
		});
	};
	deleteNinja = id => {
		let ninjasCopy = this.state.ninjas.filter(ninja => {
			return ninja.id != id;
			//returning false, filters the item out of the list
		});
		this.setState({
			ninjas: ninjasCopy,
		});
	};
	render() {
		console.log(this.props); //use 'this.props' to access props
		return (
			<div className="App">
				<h1>My first React app</h1>
				<Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas} />
				<AddNinja addNinja={this.addNinja} />
			</div>
		);
	}
}

export default App;
