const {countStairsRecursive, countStaireIterative} = require( './climbing-stairs' );

test( 'Recursive fn works', () => {
	expect( countStairsRecursive( 1 ) ).toBe( 1 );
} );

test( 'Recursive fn works', () => {
	expect( countStairsRecursive( 2 ) ).toBe( 2 );
} );

test( 'Recursive fn works', () => {
	expect( countStairsRecursive( 4 ) ).toBe( 5 );
} );

test( 'Recursive fn works', () => {
	expect( countStaireIterative( 1 ) ).toBe( 1 );
} );

test( 'Recursive fn works', () => {
	expect( countStaireIterative( 2 ) ).toBe( 2 );
} );

test( 'Recursive fn works', () => {
	expect( countStaireIterative( 4 ) ).toBe( 5 );
} );