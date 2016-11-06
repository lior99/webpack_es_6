//Utils.js
class Utils  {
	constructor() {
		// code
	}

	// methods
	static prettyPrintPerson(data, domElement) {
		if (typeof data === 'undefined'){
			console.log('data is not defined');
		}

		let outputString = '';
		data.forEach(item => {
			outputString += `<div class="person">${item}</div>`;
		});

		domElement.innerHTML = outputString;
	}
}

export default Utils;
