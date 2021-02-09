const HashTable = require( '../data-structures/hash-table' );

test( 'put() puts correct value', () => {
	const table = new HashTable();
	table.put( 'Gandalf', 'g@gamil.com' );
	expect( table.get( 'g@gmail.com' ) );
} );

test( 'remove() puts correct value', () => {
	const table = new HashTable();
	table.put( 'Gandalf', 'g@gamil.com' );
	table.remove( 'Gandalf' );
	expect( table.get( 'g@gmail.com' ) );
} );