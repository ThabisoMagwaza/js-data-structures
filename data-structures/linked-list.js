const defaultEquals = require( '../utils/defaultEquals' );
const { Node } = require( '../models/linked-list-models' );



module.exports = class LinkeList {
	/**
	 * 
	 * @param {*} equalsFunction Function to determine the requality of the elements in the linkedList
	 */
	constructor( equalsFunction = defaultEquals ){
		this.count = 0;
		this.head = null;
		this.equalsFn = equalsFunction;
	}


	/**
     * Adds an element to the front of the linked list
     * @param {*} element
     * @returns {LinkeList} Extended linked list
     */
	push( element ) {
		const node = new Node( element );
		let current;
		if( !this.head ){
			this.head = node;
		}else {
			current = this.head;
			while( current.next ){
				current = current.next;
			}
			current.next = node;
		}
		this.count++;
		return this;
	}
    
	/**
     * Removes element at a give index
     * @param {number} index 
     * @returns {*} Removed element or null if index is out of bounds
     */
	removeAt( index ) {
		if( index < 0 || index > this.count - 1 ) return null;

		let res;

		if( index === 0 ){
			res = this.head;
			this.head = this.head.next;
		}else{
			let previous = this.getElementAt( index - 1 );
			let current = previous.next;
			previous.next = current.next;
			res = current;
		}
		this.count--;
		return res.element;
	}
    
	/**
     * Returns the element at the give index
     * @param {number} index
     * @returns {Node} element or null if element is not found
     */
	getElementAt( index ) {
		if( index < 0 || index > this.count - 1 ) return null;

		let node = this.head;
		for( let i = 0; i < index; i++ ) {
			node = node.next;
		}
		return node;
	}
    
	/**
     * Check if linked list is empty
     * @returns {boolean} true if linked list is empty
     */
	isEmpty() {
		return this.head === null;
	}
    
	/**
     * Insert element at given index 
     * @param {*} element 
     * @param {number} index 
     * @returns {boolean} true if the insert was successful, else false
     */
	insert( element, index ) {   
		if( index < 0 || index > this.count - 1 ) return false;
		
		const node = new Node( element );
		
		if( index === 0 ) {
			node.next = this.head;
			this.head = node;
			this.count++;
			return true;
		}

		const previous = this.getElementAt( index - 1 );
		node.next = previous.next;
		previous.next = node;
        
		this.count++;    
        
		return true;
	}

	/**
	 * Find the index of an element	
	 * @param {*} element 
	 * @returns {number} Index of the elemement, -1 if index not found
	 */
	indexOf( element ) {
		let current = this.head;
		let index = 0;

		while( current ) {
			if( this.equalsFn( element,current.element ) ) return index;
			current = current.next;
			index++;
		}

		return -1;
	}

	/**
	 * Removes element from linke list
	 * @param {*} element 
	 */
	remove( element ) {
		return this.removeAt( this.indexOf( element ) );
	}

	/**
	 * @returns {number} Number of element in the linked list
	 */
	size() {
		return this.count;
	}

	/**
	 * @returns {Node} The head node of linked-list
	 */
	getHead() {
		return this.head;
	}
	
	/**
	 * @returns {string} A string representation of the elements in the linked list 
	 */
	toString() {
		let current = this.head;

		if( !current ) return '';

		let str =  `${current.element}`;
		current = current.next;
		while( current ) {
			str = `${str},${current.element}`;
			current = current.next;
		}

		return str;
	}
};

