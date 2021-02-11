const {createNonSortedArray} = require( '../utils/sorting-helper' );
const {bubbleSort, selectionSort, insertionSort, mergeSort, quickSort} = require( '../algorithms/sorting' );

test( 'test bubble sort', () => {
	let arr = createNonSortedArray( 6 );
	arr = bubbleSort( arr );
	expect( arr.toString() ).toBe( '1,2,3,4,5,6' );
} );

test( 'test selection sort', () => {
	let arr = createNonSortedArray( 6 );
	arr = selectionSort( arr );
	expect( arr.toString() ).toBe( '1,2,3,4,5,6' );
} );

test( 'test insertion sort', () => {
	let arr = createNonSortedArray( 6 );
	arr = insertionSort( arr );
	expect( arr.toString() ).toBe( '1,2,3,4,5,6' );
} );

test( 'test merge sort', () => {
	let arr = createNonSortedArray( 6 );
	arr = mergeSort( arr );
	expect( arr.toString() ).toBe( '1,2,3,4,5,6' );
} );

test( 'test quik sort', () => {
	let arr = createNonSortedArray( 6 );
	arr = quickSort( arr );
	expect( arr.toString() ).toBe( '1,2,3,4,5,6' );
} );