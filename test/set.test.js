const Set = require( '../data-structures/set' );

test( 'add() adds values to the set', () => {
	const set = new Set();
	set.add( 1 );
	set.add( 2 );
	set.add( 2 );
	expect( set.values() ).toEqual( [1,2] );
} );

test( 'add() adds values to the set', () => {
	const set = new Set();
	set.add( 1 );
	set.add( 2 );
	set.add( 2 );
	set.add( 3 );
	set.delete( 2 );
	expect( set.values() ).toEqual( [1,3] );
} );


test( 'size() return the correct number of elements', () => {
	const set = new Set();
	set.add( 1 );
	set.add( 2 );
	set.add( 2 );
	set.add( 3 );
	set.delete( 2 );
	expect( set.size() ).toEqual( 2 );
} );

test( 'union() creates the correct union set', () => {
	const set1 = new Set();
	set1.add( 1 );
	set1.add( 2 );
	set1.add( 3 );
    
	const set2 = new Set(); 
	set2.add( 2 );
	set2.add( 4 );
	set2.add( 5 );
    
	const unionSet = set1.union( set2 );
    
	expect( unionSet.values() ).toEqual( [1,2,3,4,5] );
} );

test( 'intersection() creates the correct intersection set', () => {
	const set1 = new Set();
	set1.add( 1 );
	set1.add( 2 );
	set1.add( 3 );
    
	const set2 = new Set(); 
	set2.add( 3 );
	set2.add( 2 );
	set2.add( 4 );
	set2.add( 5 );
    
	const intersectionSet = set1.intersection( set2 );
    
	expect( intersectionSet.values() ).toEqual( [2,3] );
} );

test( 'difference() creates the correct difference set', () => {
	const set1 = new Set();
	set1.add( 1 );
	set1.add( 2 );
	set1.add( 3 );
    
	const set2 = new Set(); 
	set2.add( 2 );
	set2.add( 4 );
	set2.add( 5 );
    
	const differenceSet = set1.difference( set2 );
    
	expect( differenceSet.values() ).toEqual( [1,3] );
} );

test( 'isInstanceOf() return true if another set is a subset of calling set', () => {
	const set1 = new Set();
	set1.add( 1 );
	set1.add( 2 );
	set1.add( 3 );
	set1.add( 4 );
	set1.add( 5 );
    
	const set2 = new Set(); 
	set2.add( 2 );
	set2.add( 4 );
	set2.add( 5 );
    
    
	expect( set2.isInstanceOf( set1 ) ).toBe( true );
} );

test( 'isInstanceOf() return true if another set is a subset of calling set', () => {
	const set1 = new Set();
	set1.add( 1 );
	set1.add( 2 );
	set1.add( 3 );
	set1.add( 4 );
	set1.add( 5 );
    
	const set2 = new Set(); 
	set2.add( 2 );
	set2.add( 4 );
	set2.add( 5 );
	set2.add( 6 );
    
    
	expect( set2.isInstanceOf( set1 ) ).toBe( false );
} );
