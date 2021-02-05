const LinkeList = require( './linked-list' );
const { DoublyNode } = require( '../models/linked-list-models' );
const defaultEquals = require( '../utils/defaultEquals' );

module.exports = class DoublyLinkedList extends LinkeList {
	/**
     * 
     * @param {*} equalsFn function to compare elements
     */
	constructor( equalsFn = defaultEquals ) {
		super( equalsFn );
		this.tail = null;
	}
    
	/**
     * Instert element at the end of the list
     * @param {*} element 
     * @return {DoublyLinkedList} list with new element
     */
	push( element ) {
		const node = new DoublyNode( element );

		if( this.isEmpty() ) {
			this.head = node;
			this.tail = node;
			this.count++;
			return this;
		}
        
		this.tail.next = node;
		node.prev = this.tail;
		this.tail = node;
		this.count++;

		return this;
	}
    
    
	/**
     * Insert element at given index
     * @param {*} element 
     * @param {number} index 
     * @returns {boolean} true if insert is successful, false otherwise
     */
	insert( element, index ) {
		if( index < 0 || index > this.count ) return false;

		if( index === this.count ) {
			this.push( element );
			return true;
		}

		const node = new DoublyNode( element );
        
		if( index === 0 ) {
			node.next = this.head;
			this.head.prev = node;
			this.head = node;
		}else {
			const current = this.getElementAt( index );
			const prev = current.prev;
            
			prev.next = node;
			node.prev = prev;
            
			current.prev = node;
			node.next = current;
		}
        
		this.count++;
		return true;
	}
    
	/**
     * Remove element at give index
     * @param {number} index
     * @returns removed element 
     */
	removeAt( index ) {
		const node = this.getElementAt( index );
		if( !node ) return null;
        
		if( this.count === 1 ) {
			this.head = null;
			this.tail = null;
			
		}else if( !node.prev ) { // first element
			this.head = node.next;
			this.head.prev = null;
		}else if( !node.next ){ // last element
			this.tail = node.prev;
			this.tail.next = null;
		}else {
			const prev = node.prev;
			const next = node.next;
            
			prev.next = next;
			next.prev = prev;
		}
        
		this.count--;
		return node;
	}
};