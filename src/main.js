import Person from './Person';
import misc from './misc';

function getPerson() {
	const people = [
		new Person("tom", "hardy"),
		new Person("jerry", "the cat"),
		new Person("mike", "matthews"),
		new Person("david", "blaine")
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
	getPerson().then((response) => {
		console.log('response 1', response);
	
		getOtherStuff().then((response) => {
				response.forEach(item => console.log('response : ', item));

		});
	});
}

main();
