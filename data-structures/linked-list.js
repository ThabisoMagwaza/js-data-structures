const defaultEquals = require( '../utils/defaultEquals' );
const { Node } = require( '../models/linked-list-models' );


/**
 * 
 * @param {*} equalsFunction Function to determine the requality of the elements in the linkedList
 */
module.exports = function LinkeList( equalsFunction = defaultEquals ) {
	let count = 0;
	let head = null;
	const equalsFn = equalsFunction;
    
	/**
     * Adds an element to the front of the linked list
     * @param {*} element
     * @returns {LinkeList} Extended linked list
     */
	this.push = function push( element ) {
		const node = new Node( element );
		let current;
		if( !head ){
			head = node;
		}else {
			current = head;
			while( current.next ){
				current = current.next;
			}
			current.next = node;
		}
		count++;
		return this;
	};
    
	/**
     * Removes element at a give index
     * @param {number} index 
     * @returns {*} Removed element or null if index is out of bounds
     */
	this.removeAt = function removeAt( index ) {
		if( index < 0 || index > count - 1 ) return null;

		let res;

		if( index === 0 ){
			res = head;
			head = head.next;
		}else{
			let previous = this.getElementAt( index - 1 );
			let current = previous.next;
			previous.next = current.next;
			res = current;
		}
		count--;
		return res.element;
	};
    
	/**
     * Returns the element at the give index
     * @param {number} index
     * @returns {Node}  
     */
	this.getElementAt = function getElementAt( index ) {
		if( index < 0 || index > count - 1 ) return null;

		let node = head;
		for( let i = 0; i < index; i++ ) {
			node = node.next;
		}
		return node;
	};
    
	/**
     * Check if linked list is empty
     * @returns {boolean} true if linked list is empty
     */
	this.isEmpty = function isEmpty() {
		return this.head === null;
	};
    
	/**
     * Insert element at given index 
     * @param {*} element 
     * @param {number} index 
     * @returns {boolean} true if the insert was successful, else false
     */
	this.insert = function insert( element, index ) {   
		if( index < 0 || index > count - 1 ) return false;
		
		const node = new Node( element );
		
		if( index === 0 ) {
			node.next = head;
			head = node;
			return true;
		}

		const previous = this.getElementAt( index - 1 );
		node.next = previous.next;
		previous.next = node;
        
		count++;    
        
		return true;
	};

	/**
	 * Find the index of an element	
	 * @param {*} element 
	 * @returns {number} Index of the elemement, -1 if index not found
	 */
	this.indexOf = function indexOf( element ) {
		let current = head;
		let index = 0;

		while( current ) {
			if( equalsFn( element,current.element ) ) return index;
			current = current.next;
			index++;
		}

		return -1;
	};

	/**
	 * Removes element from linke list
	 * @param {*} element 
	 */
	this.remove = function remove( element ) {
		return this.removeAt( this.indexOf( element ) );
	};

	/**
	 * @returns {number} Number of element in the linked list
	 */
	this.size = function size() {
		return count;
	};

	/**
	 * @returns {boolean} true if the linked list is empty, false otherwise
	 */
	this.isEmpty = function isEmpty() {
		return this.size() === 0;
	};

	/**
	 * @returns {Node} The head node of linked-list
	 */
	this.getHead = function getHead() {
		return head;
	};
	
	/**
	 * @returns {string} A string representation of the elements in the linked list 
	 */
	this.toString = function toString() {
		let current = head;
		let str = `${current.element}`;
		current = current.next;
		while( current ) {
			str = `${str},${current.element}`;
			current = current.next;
		}

		return str;
	};
};

