const SortedLinkedList = require( '../data-structures/sorted-linked-list' );

test( 'insert() inserts element in sorted order', () => {
	const list = new SortedLinkedList();
	list.insert( 5 );
	list.insert( 1 );
	list.insert( 3 );
	expect( list.toString() ).toBe( '1,3,5' );
} );