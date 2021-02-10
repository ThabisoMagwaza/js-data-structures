const { Compare, defaultCompare } = require( '../utils/defaultCompare' );

module.exports = class MinHeap {
	constructor( compareFn = defaultCompare ){
		this.compareFn = compareFn;
		this.heap = [];
	}

	getLeftIndex( index ) {
		return 2 * index + 1;
	} 
    
	getRightIndex( index ) {
		return 2 * index + 2;
	} 
    
	getParentIndex( index ) {
		if ( index === 0 ) {
			return undefined;
		}
		return Math.floor( ( index - 1 ) / 2 );
	}

	/**
     * Insert new value
     * @param {*} value 
     */
	insert( value ){
		if( value !== null ){
			this.heap.push( value );
			this.shiftUp( this.heap.length - 1 );
			return true;
		}
		return false;
	}

	shiftUp( index ){
		let parent = this.getParentIndex( index );
		while( index > 0 && this.compareFn( this.heap[parent], this.heap[index] ) === Compare.GREATER_THAN ){
			this.swap( this.heap, parent, index );
			index = parent;
			parent = this.getParentIndex( index );        
		}
	}

	swap( array, a, b ){
		const temp = array[a]; 
		array[a] = array[b];
		array[b] = temp;
	}

	size(){
		return this.heap.length;
	}

	isEmpty() {
		return this.size() === 0;
	}

	findMinimum() {
		return this.isEmpty() ? undefined : this.heap[0];
	}

	/**
     * Removes the smallest element from the heap
     * @returns Smallest element
     */
	extract(){
		if( this.isEmpty() ) return undefined;
		if( this.size() === 1 ) return this.heap.shift();
		const removedVal = this.heap.shift();
		this.shiftDown( 0 );
		return removedVal;
	}

	shiftDown( index ){
		let element = index;
		const left = this.getLeftIndex( index );
		const right = this.getRightIndex( index );
		const size = this.size();

		if(
			left < size &&
            this.compareFn( this.heap[element], this.heap[left] ) > Compare.GREATER_THAN
		){element = left;}
		if(
			left < size &&
            this.compareFn( this.heap[element], this.heap[right] ) > Compare.GREATER_THAN
		){element = right;}

		if( index !== element ){
			this.swap( this.heap, index, element );
			this.shiftDown( element );
		}
	}
};