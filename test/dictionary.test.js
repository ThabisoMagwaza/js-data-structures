const Dictionary = require( '../data-structures/dictionary' );

test( 'Set() add correct key', () => {
	const dict = new Dictionary();
	dict.set( 'Gandalf', 'g@gmail.com' );
	dict.set( 'Thabiso', 't@gmail.com' );
    
	expect( dict.keys() ).toEqual( ['Gandalf','Thabiso'] );
} );

test( 'Set() add correct value', () => {
	const dict = new Dictionary();
	dict.set( 'Gandalf', 'g@gmail.com' );
	dict.set( 'Thabiso', 't@gmail.com' );
    
	expect( dict.values() ).toEqual( ['g@gmail.com','t@gmail.com'] );
} );

test( 'get() retrieves value correctly', () => {
	const dict = new Dictionary();
	dict.set( 'Gandalf', 'g@gmail.com' );
	dict.set( 'Thabiso', 't@gmail.com' );
    
	expect( dict.get( 'Gandalf' ) ).toBe( 'g@gmail.com' );
} );

test( 'dictionary has correct size after Set()', () => {
	const dict = new Dictionary();
	dict.set( 'Gandalf', 'g@gmail.com' );
	dict.set( 'Thabiso', 't@gmail.com' );
    
	expect( dict.size() ).toBe( 2 );
} );

test( 'remove() removes key', () => {
	const dict = new Dictionary();
	dict.set( 'Gandalf', 'g@gmail.com' );
	dict.set( 'Thabiso', 't@gmail.com' );
	dict.remove( 'Thabiso' );
    
	expect( dict.get( 'Thabiso' ) ).toBe( undefined );
} );


test( 'foreach runs for eack [key,value] pair', () => {
	const dict = new Dictionary();
	dict.set( 'Gandalf', 'g@gmail.com' );
	dict.set( 'Thabiso', 't@gmail.com' );
	const arr = [];
    
	dict.forEach( ( k,v ) => arr.push( `${k},${v}` ) );
    
	expect( arr ).toEqual( ['Gandalf,g@gmail.com', 'Thabiso,t@gmail.com'] );
} );




























