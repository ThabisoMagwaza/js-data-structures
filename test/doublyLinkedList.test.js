const DoublyLinkedList = require( '../data-structures/doubly-linked-list' );

test( 'push() add new element to the send of the list', () => {
	const list = new DoublyLinkedList();
	list.push( 'Gauteng' ).push( 'KZN' );
	expect( list.toString() ).toBe( 'Gauteng,KZN' );
} );

test( 'insert() able to insert element at index = 0', () => {
	const list = new DoublyLinkedList();
	list.push( 'Gauteng' ).push( 'KZN' );
	list.insert( 'Limpopo', 0 );
	expect( list.toString() ).toBe( 'Limpopo,Gauteng,KZN' );
} );

test( 'insert() able to insert element at index = end of the list', () => {
	const list = new DoublyLinkedList();
	list.push( 'Gauteng' ).push( 'KZN' );
	list.insert( 'Limpopo', 2 );
	expect( list.toString() ).toBe( 'Gauteng,KZN,Limpopo' );
} );

test( 'insert() able to insert element at index', () => {
	const list = new DoublyLinkedList();
	list.push( 'Gauteng' ).push( 'KZN' );
	list.insert( 'Limpopo', 1 );
	expect( list.toString() ).toBe( 'Gauteng,Limpopo,KZN' );
} );

test( 'insert() fails if index is out of bounds', () => {
	const list = new DoublyLinkedList();
	list.push( 'Gauteng' ).push( 'KZN' );
	list.insert( 'Limpopo', 3 );
	list.insert( 'Limpopo', -1 );
	expect( list.toString() ).toBe( 'Gauteng,KZN' );
} );

test( 'removeAt() works for removing element from list with size 1', () => {
	const list = new DoublyLinkedList();
	list.push( 'Gauteng' );
	list.removeAt( 0 );
	expect( list.toString() ).toBe( '' );
} );

test( 'removeAt() works for removing first element', () => {
	const list = new DoublyLinkedList();
	list.push( 'Gauteng' ).push( 'KZN' );
	list.removeAt( 0 );
	expect( list.toString() ).toBe( 'KZN' );
} );

test( 'removeAt() works for removing last element', () => {
	const list = new DoublyLinkedList();
	list.push( 'Gauteng' ).push( 'KZN' );
	list.removeAt( 1 );
	expect( list.toString() ).toBe( 'Gauteng' );
} );

test( 'removeAt() works for removing last element', () => {
	const list = new DoublyLinkedList();
	list.push( 'Gauteng' ).push( 'KZN' ).push( 'Limpopo' );
	list.removeAt( 1 );
	expect( list.toString() ).toBe( 'Gauteng,Limpopo' );
} );

