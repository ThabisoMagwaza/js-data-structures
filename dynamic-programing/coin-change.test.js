const {calcNumberOfChange} = require( './coin-change' );


test( 'sample 2 test', () =>  {
	const d = [1,2,3];
	expect( calcNumberOfChange( 4,d ) ).toBe( 4 );
} );


test( 'sample 1 test', () =>  {
	const d = [1,3,5,10];
	expect( calcNumberOfChange( 3,d ) ).toBe( 2 );
} );

test( 'sample 3 test', () =>  {
	const d = [2,5,3,6];
	expect( calcNumberOfChange( 10,d ) ).toBe( 5 );
} );