const MinHeap = require( './minheap' );
const {reverseCompare} = require( '../utils/defaultCompare' );

module.exports = class MaxHeap extends MinHeap {
	constructor( compareFn = reverseCompare ) {
		super( compareFn );
		this.compareFn = compareFn;
	}
};