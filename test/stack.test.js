const { expect, test } = require('@jest/globals');
const Stack = require('../data-structures/stack');

test('Newly created stack should be empty', () => {
	const stack = new Stack();
	expect(stack.isEmpty()).toBe(true);
});

test('push() adds element to front of stack', () => {
	const stack = new Stack();
	stack.push(5);
	expect(stack.isEmpty()).toBe(false);
});

test('Peek() returns element at the top of the stack', () => {
	const stack = new Stack();
	stack.push(5);
	stack.push(8);
	expect(stack.peek()).toBe(8);
});

test('size() returns number of elements in stack', () => {
	const stack = new Stack();
	stack.push(5);
	stack.push(8);
	stack.push(11);
	expect(stack.size()).toEqual(3);
});

test('pop() removed element at the top of the tack', () => {
	const stack = new Stack();
	stack.push(5);
	stack.push(8);
	stack.push(11);
	stack.push(15);
	stack.pop();
	stack.pop();
	expect(stack.size()).toEqual(2);
	expect(stack.peek()).toEqual(8);
});

