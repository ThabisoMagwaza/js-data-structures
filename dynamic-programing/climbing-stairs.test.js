const {countStairsRecursive, countStaireIterative, countStairsCheapest} = require( './climbing-stairs' );

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

test( 'conting cheapest staircase price', () => {
	expect( countStairsCheapest( [3,2,4] ).minCost ).toBe( 6 );
} );

test( 'conting cheapest staircase price 2', () => {
	expect( countStairsCheapest( [3,2,4,6,1,1,5,3] ).minCost ).toBe( 11 );
} );

test( 'conting cheapest staircase price path', () => {
	expect( countStairsCheapest( [3,2,4] ).path.toString() ).toBe( '0,2,3' );
} );


test( 'conting cheapest staircase price 2', () => {
	expect( countStairsCheapest( [3,2,4,6,1,1,5,3] ).path.toString() ).toBe( '0,2,3,5,6,8' );
} );