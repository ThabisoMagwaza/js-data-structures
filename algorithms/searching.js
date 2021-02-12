const defaultEquals = require( '../utils/defaultEquals' );
const {defaultCompare, Compare} = require( '../utils/defaultCompare' );
const {quickSort} = require( '../algorithms/sorting' );

const DOES_NOT_EXIST = -1;

/**
 * Finds the index of a value in an array
 * @param {Array} array 
 * @param {*} value 
 * @param {*} equalsFn 
 * @returns {number} Index of value or -1 if the value is not found
 */
module.exports.sequentialSearch = ( array, value, equalsFn = defaultEquals ) => {
	for ( let i = 0; i < array.length; i++ ) { // {1}
		if ( equalsFn( value, array[i] ) ) { // {2}
			return i; // {3}
		}
	}
	return DOES_NOT_EXIST; // {4}
};

/**
 * Usese binary search to find a value in the array
 * @param {Array} array 
 * @param {*} value 
 * @param {*} compareFn 
 * @returns The value if found, null if the value is not found
 */
module.exports.binarySearch = ( array, value, compareFn = defaultCompare ) => {
	const sortedArray = quickSort( array, compareFn );
	let low = 0;
	let high = sortedArray.length - 1;
	while( lesserOrEquals( low,high,compareFn ) ){
		const mid = Math.floor( ( low + high ) / 2 );
		const element = sortedArray[mid];
		if( compareFn( element,value ) === Compare.LESS_THAN ){
			low = mid + 1;
		}else if( compareFn( element,value ) === Compare.GREATER_THAN ){
			high = mid - 1;
		}else {
			return sortedArray[mid];
		}
	}
	return null;
};

function lesserOrEquals( a, b, compareFn ) {
	const comp = compareFn( a, b );
	return comp === Compare.LESS_THAN || comp === Compare.EQUALS;
}