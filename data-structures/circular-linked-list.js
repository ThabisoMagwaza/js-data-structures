const LinkedList = require( './linked-list' );
const { Node } = require( '../models/linked-list-models' );
const defaultEquals = require( '../utils/defaultEquals' );

module.exports = class CircularLinkedList extends LinkedList {
	/**
     * Function to compare objects stored in the list
     * @param {*} equalsFn 
     * @returns {boolean} True of objects are equal, false otherwise
     */
	constructor( equalsFn = defaultEquals ) {
		super( equalsFn );
	}

	/**
     * Insert element at the end of the list
     * @param {*} element 
     */
	push( element ) {
		const node = new Node( element ); 
		if( this.isEmpty() ) {
			this.head = node;
		}else {
			let current = this.head;
			while( current.next !== this.head ) {
				current = current.next;
			}
			current.next = node;
		}
        
		node.next = this.head;
		this.count++;
		return this;
	}       
    
	/**
     * Insert element at given index
     * @param {*} element 
     * @param {number} index 
     */
	insert( element, index ) {
		if( index < 0 || index > this.count ) return false;

		if( index ===  this.count ) {
			this.push( element );
			return true;
		}
        
		const node = new Node( element );
		this.count++;

		if( index === 0 ) {
			node.next = this.head;
			this.head = node;
			const tail = this.getElementAt( this.count - 1 );
			tail.next  = node;
		}else{
			const prev = this.getElementAt( index - 1 );
			node.next = prev.next;
			prev.next = node;
		}
        
		
		return true;
	}

	/**
	 * Remove element at index
	 * @param {number} index 
	 */
	removeAt( index ) {
		if( index < 0 || index > this.count + 1 ) return null;

		if( this.size() === 1 ) {
			const res = this.head;
			this.head = null;
			this.count--;
			return res;
		}

		let res;

		if( index === 0 ) {	
			res = this.head;
			this.getElementAt( this.count - 1 ).next = this.head.next;
			this.head = this.head.next;
		}else if( index === this.count - 1 ) {
			this.getElementAt( index - 1 ).next = this.head;
		}else {
			const prev = this.getElementAt( index - 1 );
			const next = prev.next.next;

			prev.next = next;
		}

		this.count--;
		return res;
	}
    
	/**
	 * @returns {string} A string representation of the elements in the linked list 
	 */
	toString() {
		let current = this.head;

		if( !current ) return '';

		let str =  `${current.element}`;
		current = current.next;
		while( current !== this.head ) {
			str = `${str},${current.element}`;
			current = current.next;
		}

		return str;
	}

};