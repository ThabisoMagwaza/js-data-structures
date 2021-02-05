const LinkedList = require( './linked-list' );
const defaultEquals = require( '../utils/defaultEquals' );
const { Compare ,defaultCompare} = require( '../utils/defaultCompare' );

module.exports = class SortedLinkedList extends LinkedList {
	constructor( equalsFn = defaultEquals, compareFn = defaultCompare ) {
		super( equalsFn );
		this.compareFn = compareFn;
	}
    
	/**
     * Inserts element in the nex position that keeps the list sorted
     * @param {} element 
     * @returns {number} Index where new element is inserted
     */
	insert( element ){
		if( this.isEmpty() ) {
			this.push( element );
			return 0;
		}
        
		const pos = this.getNextIndex( element );
		super.insert( element, pos );
		return pos; 
	}
    
	/**
     * Calculates the index to insert the element such that the list remains sorted
     * @param {*} element 
     * @returns {number} Index of inserted element
     */
	getNextIndex( element ){
		let current = this.head;
		let i = 0;

		while( this.compareFn( element,current.element ) === Compare.GREATER_THAN ) {
			current = current.next;
			i++;
		}

		return i;
	}
    

};

