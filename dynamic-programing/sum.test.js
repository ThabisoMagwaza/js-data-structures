const {sumDPRecursive, sumDP} = require( './sum' );

test( 'sum recursively adds number correctly', () => {
	expect( sumDPRecursive( [1,2,3,4] ) ).toBe( 10 );
} );

test( 'sum adds number correctly', () => {
	expect( sumDP( [1,2,3,4] ) ).toBe( 10 );
} );
