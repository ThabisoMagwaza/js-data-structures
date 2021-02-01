const { expect } = require('@jest/globals');
const Stack = require('../data-structures/stack');

test('Newly created stack should be empty', () => {
	const stack = new Stack();
	expect(stack.isEmpty()).toBe(true);
}); 