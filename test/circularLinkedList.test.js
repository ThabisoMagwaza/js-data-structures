const CircularLinkedList = require( '../data-structures/circular-linked-list' );

test( 'push() inserts correctly into an empty list', () => {
	const list = new CircularLinkedList();
	list.push( 'Gauteng' );
	expect( list.toString() ).toBe( 'Gauteng' );
} );

test( 'push() inserts correctly into a populated list', () => {
	const list = new CircularLinkedList();
	list.push( 'Gauteng' ).push( 'KZN' );
	expect( list.toString() ).toBe( 'Gauteng,KZN' );
} );

test( 'insert() inserts correctly into an empty list', () => {
	const list = new CircularLinkedList();
	list.insert( 'Gauteng', 0 );
	expect( list.toString() ).toBe( 'Gauteng' );
} );

test( 'insert() inserts correctly into the beginning of a populated list', () => {
	const list = new CircularLinkedList();
	list.push( 'KZN' );
	list.insert( 'Gauteng', 0 );
	expect( list.toString() ).toBe( 'Gauteng,KZN' );
} );

test( 'insert() inserts correctly into the end of a populated list', () => {
	const list = new CircularLinkedList();
	list.push( 'KZN' );
	list.insert( 'Gauteng', 1 );
	expect( list.toString() ).toBe( 'KZN,Gauteng' );
} );

test( 'insert() inserts correctly into the middle of a populated list', () => {
	const list = new CircularLinkedList();
	list.push( 'KZN' );
	list.push( 'Limpopo' );
	list.insert( 'Gauteng', 1 );
	expect( list.toString() ).toBe( 'KZN,Gauteng,Limpopo' );
} );

test( 'removeAt() removes correctly from the start of a list of size 1', () => {
	const list = new CircularLinkedList();
	list.push( 'KZN' );
	list.removeAt( 0 );
	expect( list.toString() ).toBe( '' );
} );

test( 'removeAt() removed correctly at index 0 when size > 1', () => {
	const list = new CircularLinkedList();
	list.push( 'KZN' );
	list.push( 'Gauteng' );
	list.removeAt( 0 );
	expect( list.toString() ).toBe( 'Gauteng' );
} );

test( 'removeAt() removed correctly at last element when size > 1', () => {
	const list = new CircularLinkedList();
	list.push( 'KZN' );
	list.push( 'Gauteng' );
	list.removeAt( 1 );
	expect( list.toString() ).toBe( 'KZN' );
} );

test( 'removeAt() removed correctly form the middle element when size > 1', () => {
	const list = new CircularLinkedList();
	list.push( 'KZN' );
	list.push( 'Gauteng' );
	list.push( 'Limpopo' );
	list.removeAt( 1 );
	expect( list.toString() ).toBe( 'KZN,Limpopo' );
} );

