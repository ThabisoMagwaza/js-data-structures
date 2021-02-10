const {defaultCompare, Compare} = require( '../utils/defaultCompare' );

module.exports = function heapSort( array, compareFn = defaultCompare ) {
	let heapSize = array.length;
	buildMaxHeap( array, compareFn ); // step 1
	while ( heapSize > 1 ) {
		swap( array, 0, --heapSize ); // step 2
		heapify( array, 0, heapSize, compareFn ); // step 3
	}
	return array;
};

function buildMaxHeap( array, compareFn ) {
	for ( let i = Math.floor( array.length / 2 ); i >= 0; i -= 1 ) {
		heapify( array, i, array.length, compareFn );
	}
	return array;
}

function swap( array, a, b ){
	const temp = array[a]; 
	array[a] = array[b];
	array[b] = temp;
}

function heapify( array,index,size, compareFn ){
	let element = index;
	const left = 2 * index + 1;
	const right = 2 * index + 2;

	if(
		left < size &&
        compareFn( array[element], array[left] ) > Compare.GREATER_THAN
	){element = left;}
	if(
		left < size &&
        compareFn( array[element], array[right] ) > Compare.GREATER_THAN
	){element = right;}

	if( index !== element ){
		swap( array, index, element );
		heapify( element );
	}
}