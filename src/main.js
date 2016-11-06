import Person from './Person';
import misc from './misc';
import Utils from './Utils';

function getPerson() {
	const people = [
		new Person("tom", "hardy"),
		new Person("jerry", "the cat"),
		new Person("mike", "matthews"),
		new Person("david", "blaine"),
		new Person() // this will generate a "john doe" with default values
	];	

	return new Promise((resolve, reject) => {
		setTimeout(function() {
			resolve(people);
		}, 1500);	
		
	});	
}

function getOtherStuff() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const result = [misc.sayHello(), misc.sayHello('lior')];
			resolve(result);
		}, 1000);
	});
}


function main(argument) {
	const domElement = document.querySelector('.output');
	getPerson().then((response) => {
		const personArray = response.map(person => person.getFullName());
		Utils.prettyPrintPerson(personArray, domElement);
		});
	
		getOtherStuff().then((response) => {
				response.forEach(item => console.log('response : ', item));

		});
}



main();
