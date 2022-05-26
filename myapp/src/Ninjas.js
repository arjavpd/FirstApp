//function because Ninjas is a UI component
//Passing a value with function on an event  calls it, so put it through a annoymous function to avoid that
import React from 'react';
import './Ninjas.css';

const Ninjas = ({ninjas, deleteNinja}) => {
	const ninjaList = ninjas.map(ninja => {
		return (
			<div className="ninja" key={ninja.id}>
				<div>Name: {ninja.name}</div>
				<div>Age: {ninja.age}</div>
				<div>Belt: {ninja.belt}</div>
				<button onClick={() => deleteNinja(ninja.id)}>Delete ninja</button>
			</div>
		);
	});
	return <div className="ninja-list">{ninjaList}</div>;
};

export default Ninjas;
