const obj = {
	id:1,
	name : 'some name',
	sayHello:function(name = 'world') {
		return `hello ${name}!`;
	}
}

export default obj;