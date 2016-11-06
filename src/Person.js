class Person  {
	constructor(name = 'john', lastName = 'doe') {
		this.name = name;
		this.lastName = lastName;
	}

	// methods
	getFullName(){
		return `${this.name} ${this.lastName}`;
	}
	
}

export default Person;