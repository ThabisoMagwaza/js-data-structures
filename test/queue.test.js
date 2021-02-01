const { test, expect } = require('@jest/globals');
const Queue = require('../data-structures/queue');

test('Newly created queue is empty', () => {
	const queue = new Queue();
	expect(queue.isEmpty()).toBe(true);
});

test('Enqueue adds elements to the back of the queue', () => {
	const queue = new Queue();
	queue.enqueue('John');
	queue.enqueue('Jack');
	expect(queue.toString()).toBe('John,Jack');
});

test('Peek() return element at the front of queue', () => {
	const queue = new Queue();
	queue.enqueue('John');
	queue.enqueue('Jack');
	expect(queue.peek()).toBe('John');
});


test('size() return size of queue', () => {
	const queue = new Queue();
	queue.enqueue('John');
	queue.enqueue('Jack');
	queue.enqueue('Camila');
	expect(queue.size()).toBe(3);
});

test('dequeue() removes element from front of the queue', () => {
	const queue = new Queue();
	queue.enqueue('John');
	queue.enqueue('Jack');
	queue.enqueue('Camila');
	queue.dequeue();
	queue.dequeue();
	expect(queue.peek()).toBe('Camila');
});

