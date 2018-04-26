let Person = require('./person.js');

module.exports = class Systembolaget {

	constructor(legalAge) {
		this.legalAge = legalAge;
		this.people = [];
	}

	sellAlcohol(buyer) {
		assert(buyer instanceof Person, "A person is not an instance of Person class");
		assert(this.people.includes(buyer), "A person is not in Systembolaget");
		assert(buyer.age >= this.legalAge, buyer.name + ", bro, try next year");
		console.log(buyer.name + " bought some good stuff");
	}

	enter(person) {
		assert(person instanceof Person, "A person is not an instance of Person class");
		assert(person.age >= this.legalAge, "A person is underaged");
		assert(this.people.includes(person) == false, "The person that already is in store enters the store");
		this.people.push(person);
	}

	leave(person) {
		assert(person instanceof Person, "A person is not an instance of Person class");
		let index = this.people.indexOf(person);
		assert(this.people.includes(person), "The person that already is in store enters the store");
		this.people.splice(index, 1);
	}
	
}
