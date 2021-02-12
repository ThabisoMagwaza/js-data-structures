const {sequentialSearch, binarySearch} = require( '../algorithms/searching' );

test( 'seqential search finds value that exist', () => {
	const arr = [1,3,4,2,5];
	expect( sequentialSearch( arr,3 ) ).toBe( 1 );
} );

test( 'seqential search return -1 if value does not exist', () => {
	const arr = [1,3,4,2,5];
	expect( sequentialSearch( arr,10 ) ).toBe( -1 );
} );

test( 'binary search finds value that exist', () => {
	const arr = [1,3,4,2,5];
	expect( binarySearch( arr,3 ) ).toBe( 3 );
} );

test( 'binary search return -1 if value does not exist', () => {
	const arr = [1,3,4,2,5];
	expect( binarySearch( arr,10 ) ).toBe( null );
} );

