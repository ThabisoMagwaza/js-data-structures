module.exports = function Deque() {
	let count = 0;
	let lowestCount = 0;
	let items = {};
    
	/**
     * Determines if the Deque is empty
     * @returns {boolean} True if the Deque is empty
     */
	this.isEmpty = function isEmpty() {
		return count - lowestCount === 0;      
	};
    
	/**
     * Clears the Deque
     * @returns {Deque} Empty Deque
     */
	this.clear = function clear() {
		count = 0;
		lowestCount = 0;
		items = {};
		return this;
	};
    
	/**
     * Calculates the number of elements in the Deque
     * @returns {number} Number of elements in the Deque 
     */
	this.size = function size() {
		return count - lowestCount;
	};
    
	/**
     * Returns string representation of the Deque
     */
	this.toString = function toString() {
		const keys = Object.keys(items).sort((a, b) => a - b);
		return keys.map(key => items[key]).toString();
	};
    
	/**
     * Add element to the front of the Deque
     * @param {*} element 
     * @returns {Deque} Deque with new element added to front
     */
	this.addFront = function addFront(element) {
		items[lowestCount - 1] = element;
		lowestCount--;
		return this;
	};
    
	/**
     * Adds element to the back of the Deque
     * @param {*} element 
     * @returns {Deque} Deque with new element added to back 
     */
	this.addBack = function addBack(element) {
		items[count] = element;
		count++;
		return this;
	};
    
	/**
     * Removes element from the front if the queue
     * @returns {*} element that was removed from the front of Deque
     */
	this.removeFront = function removeFront() {
		const res = items[lowestCount];
		delete items[lowestCount];
		lowestCount++;
		return res;
	};
    
	/**
     * Removes element from the back of the queue
     * @returns element removed from the back of the Deque
     */
	this.removeBack = function removeBack() {
		const res = items[count - 1];
		delete items[count - 1];
		count--;
		return res;
	};
    
	/**
     * Peeks element at the front of the Deque
     * @returns element in the front of the Deque
     */
	this.peekFront = function peekFront() {
		return items[lowestCount];
	};
    
	/**
     * Peeks element at the back of the Deque
     * @returns element at the back of the Deque
     */
	this.peekBack = function peekBack() {
		return items[count - 1];
	};
};