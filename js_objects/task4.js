const person = {
	firstName: 'Hannah',
	lastName: 'Jones',
	age: 27,
};

person.email = 'test@test.com';

delete person.age;

console.log(person);
