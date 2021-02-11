const {defaultCompare, Compare} = require( '../utils/defaultCompare' );
const swap = require( '../utils/swap' );

/**
 * Sort array using the bubble sort algorithm
 * @param {Array} array 
 * @param {*} compareFn 
 */
module.exports.bubbleSort = ( array, compareFn = defaultCompare )  => {
	const {length} = array;
	for( let i = 0; i < length; i++ ){
		for( let j = 0; j < length - 1 - i; j++ ){
			if( compareFn( array[j], array[j+1] ) === Compare.GREATER_THAN ) swap( array, j, j+1 );
		}
	}
	return array;
};

/**
 * Sort array using the bubble sort algorithm
 * @param {Array} array 
 * @param {*} compareFn 
 */
module.exports.selectionSort = function selectionSort( array, compareFn = defaultCompare ) {
	const { length } = array; // {1}
	let indexMin;
	for ( let i = 0; i < length - 1; i++ ) { // {2}
		indexMin = i; // {3}
		for ( let j = i; j < length; j++ ) { // {4}
			if ( compareFn( array[indexMin], array[j] ) === Compare.GREATER_THAN ) { // {5}
				indexMin = j; // {6}
			}
		}
		if ( i !== indexMin ) { // {7}
			swap( array, i, indexMin );
		}
	}
	return array;
};

/**
 * Sort array using the bubble sort algorithm
 * @param {Array} array 
 * @param {*} compareFn 
 */
module.exports.insertionSort = function insertionSort( array, compareFn = defaultCompare ) {
	const { length } = array; // {1}
	let temp;
	for ( let i = 1; i < length; i++ ) { // {2}
		let j = i; // {3}
		temp = array[i]; // {4}
		while ( j > 0 && compareFn( array[j - 1], temp ) === Compare.GREATER_THAN ) { // {5}
			array[j] = array[j - 1]; // {6}
			j--;
		}
		array[j] = temp; // {7}
	}
	return array;
};


/**
 * Sort array using the merge sort algorithm
 * @param {Array} array 
 * @param {*} compareFn 
 */
module.exports.mergeSort = function mergeSort( array, compareFn = defaultCompare ) {
	if ( array.length > 1 ) { // {1}
		const { length } = array;
		const middle = Math.floor( length / 2 ); // {2}
		const left = mergeSort( array.slice( 0, middle ), compareFn ); // {3}
		const right = mergeSort( array.slice( middle, length ), compareFn ); // {4}
		array = merge( left, right, compareFn ); // {5}
	}
	return array;
};

function merge( left, right, compareFn ) {
	let i = 0; // {6}
	let j = 0;
	const result = [];
	while ( i < left.length && j < right.length ) { // {7}
		result.push(
			compareFn( left[i], right[j] ) === Compare.LESS_THAN ? left[i++] : right[j++]
		); // {8}
	}
	return result.concat( i < left.length ? left.slice( i ) : right.slice( j ) ); // {9}
}

/**
 * Sort array using the quick sort algorithm
 * @param {Array} array 
 * @param {*} compareFn 
 */
module.exports.quickSort = function quickSort( array, compareFn = defaultCompare ) {
	return quick( array, 0, array.length - 1, compareFn );
};

function quick( array, left, right, compareFn ) {
	let index; // {1}
	if ( array.length > 1 ) { // {2}
		index = partition( array, left, right, compareFn ); // {3}
		if ( left < index - 1 ) { // {4}
			quick( array, left, index - 1, compareFn ); // {5}
		}
		if ( index < right ) { // {6}
			quick( array, index, right, compareFn ); // {7}
		}
	}
	return array;
}

function partition( array, left, right, compareFn ) {
	const pivot = array[Math.floor( ( right + left ) / 2 )]; // {8}
	let i = left; // {9}
	let j = right; // {10}
	while ( i <= j ) { // {11}
		while ( compareFn( array[i], pivot ) === Compare.LESS_THAN ) { // {12}
			i++;
		}
		while ( compareFn( array[j], pivot ) === Compare.GREATER_THAN ) { // {13}
			j--;
		}
		if ( i <= j ) { // {14}
			swap( array, i, j ); // {15}
			i++;
			j--;
		}
	}
	return i; // {16}
}