import React from 'react';

const Ninjas = ({ninjas}) => {
	/*
	const ninjaList = ninjas.map(ninja => {
		if (ninja.age > 20) {
			return (
				<div className="ninja" key={ninja.id}>
					<div>Name: {ninja.name}</div>
					<div>Age: {ninja.age}</div>
					<div>Belt: {ninja.belt}</div>
				</div>
			);
		} else {
			return null;
		}
	});
    */
	return (
		<div className="ninja-list">
			{ninjas.map(ninja => {
				return ninja.age > 20 ? (
					<div className="ninja" key={ninja.id}>
						<div>Name: {ninja.name}</div>
						<div>Age: {ninja.age}</div>
						<div>Belt: {ninja.belt}</div>
					</div>
				) : null; //return condition ? (return if true): (return if false)
			})}
		</div>
	);
};

export default Ninjas;
