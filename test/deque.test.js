const Deque = require('../data-structures/deque'); 

test('New Deque should be empty', () => {
	const deque = new Deque();
	expect(deque.isEmpty()).toBe(true);
});

test('addFront() adds new element to the front of the Deque', () => {
	const deque = new Deque();
	deque.addFront('Gauteng');
	deque.addFront('KZN');
	expect(deque.toString()).toBe('KZN,Gauteng');
});

test('addBack() adds new element to the back of the Deque', () => {
	const deque = new Deque();
	deque.addBack('Gauteng');
	deque.addBack('KZN');
	expect(deque.toString()).toBe('Gauteng,KZN');
});

test('clear() returns new empty Deque', () => {
	const deque = new Deque();
	deque.addFront('Gauteng');
	deque.addFront('KZN');
	deque.clear();
	expect(deque.isEmpty()).toBe(true);
});

test('size() returns number of element is the Deque', () => {
	const deque = new Deque();
	deque.addFront('Gauteng');
	deque.addFront('KZN');
	expect(deque.size()).toBe(2);
});


test('removeFront() removes element in the front of the Deque', () => {
	const deque = new Deque();
	deque.addBack('Gauteng');
	deque.addBack('KZN');
	deque.addBack('Limpopo');
	deque.removeFront();
	expect(deque.toString()).toBe('KZN,Limpopo');
});

test('removeBack() removes element in the back of the Deque', () => {
	const deque = new Deque();
	deque.addBack('Gauteng');
	deque.addBack('KZN');
	deque.addBack('Limpopo');
	deque.removeBack();
	expect(deque.toString()).toBe('Gauteng,KZN');
});

test('peekFront() returns element at the front of the Deque', () => {
	const deque = new Deque();
	deque.addBack('Gauteng');
	deque.addBack('KZN');
	deque.addBack('Limpopo');
	expect(deque.peekFront()).toBe('Gauteng');
});

test('peekBack() returns element at the back of the Deque', () => {
	const deque = new Deque();
	deque.addBack('Gauteng');
	deque.addBack('KZN');
	deque.addBack('Limpopo');
	expect(deque.peekBack()).toBe('Limpopo');
});