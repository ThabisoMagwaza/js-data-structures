const LinkeList = require( '../data-structures/linked-list' );

test( 'New linked linkedList is empty', () =>{
	const linkedList = new LinkeList();
	expect( linkedList.isEmpty() ).toBe( true );
} );

test( 'push() adds element to the end of the linkedList', () => {
	const linkedList = new LinkeList();
	linkedList.push( 'Gauteng' );
	linkedList.push( 'KZN' );
	expect( linkedList.toString() ).toBe( 'Gauteng,KZN' );
} );

test( 'getElementAt() gets correct element when index = 0', () => {
	const linkedList = new LinkeList();
	linkedList.push( 'Gauteng' );
	linkedList.push( 'KZN' );
	expect( linkedList.getElementAt( 0 ).element ).toBe( 'Gauteng' );
} );

test( 'getElementAt() gets correct element when index is larger than zero', () => {
	const linkedList = new LinkeList();
	linkedList.push( 'Gauteng' );
	linkedList.push( 'KZN' );
	expect( linkedList.getElementAt( 1 ).element ).toBe( 'KZN' );
} );

test( 'getElementAt() returns null if index is out of bounds', () => {
	const linkedList = new LinkeList();
	linkedList.push( 'Gauteng' );
	linkedList.push( 'KZN' );
	expect( linkedList.getElementAt( 2 ) ).toBe( null );
	expect( linkedList.getElementAt( -1 ) ).toBe( null );
} );

test( 'removeAt() removes element from given index', () => {
	const linkedList = new LinkeList();
	linkedList.push( 'Gauteng' );
	linkedList.push( 'KZN' );
	linkedList.removeAt( 0 );
	linkedList.push( 'Limpopo' );
	linkedList.push( 'FreeState' );
	linkedList.removeAt( 1 );
	expect( linkedList.toString() ).toBe( 'KZN,FreeState' );
} );

test( 'insert() inserts element at correctly when index is 0', () => {
	const linkedList = new LinkeList(); 
	linkedList.push( 'Gauteng' );
	linkedList.push( 'KZN' );
	linkedList.insert( 'Limpopo', 0 );
	expect( linkedList.toString() ).toBe( 'Limpopo,Gauteng,KZN' );
} );

test( 'insert() inserts element at correctly when index is not zero', () => {
	const linkedList = new LinkeList(); 
	linkedList.push( 'Gauteng' );
	linkedList.push( 'KZN' );
	linkedList.insert( 'Limpopo', 1 );
	expect( linkedList.toString() ).toBe( 'Gauteng,Limpopo,KZN' );
} );

test( 'indexOf() returns correct index for default equalsFn', () => {
	const linkedList = new LinkeList(); 
	linkedList.push( 'Gauteng' );
	linkedList.push( 'KZN' );
	expect( linkedList.indexOf( 'KZN' ) ).toBe( 1 );
} );

test( 'indexOf() returns correct index for custom equalsFn', () => {
	const linkedList = new LinkeList( ( a, b ) => ( a.name === b.name && a.surname === b.surname ) ); 
	linkedList.push( {
		name: 'Thabiso',
		surname: 'Magwaza'
	} );
	linkedList.push( {
		name: 'Destiny',
		surname: 'Manda'
	} );
	expect( linkedList.indexOf( {name: 'Destiny', surname: 'Manda'} ) ).toBe( 1 );
} );

test( 'indexOf() return -1 if element is not found', () => {
	const linkedList = new LinkeList( ( a, b ) => ( a.name === b.name && a.surname === b.surname ) ); 
	linkedList.push( {
		name: 'Thabiso',
		surname: 'Magwaza'
	} );
	linkedList.push( {
		name: 'Destiny',
		surname: 'Manda'
	} );
	expect( linkedList.indexOf( {name: 'Test', surname: 'Manda'} ) ).toBe( -1 );
} );

test( 'remove() successfully removes element for valid index', () => {
	const linkedList = new LinkeList();
	linkedList.push( 'KZN' ).push( 'Gauteng' ).push( 'Limpopo' );
	linkedList.remove( 'Gauteng' );
	expect( linkedList.toString() ).toBe( 'KZN,Limpopo' );
} );

test( 'remove() leaves the list unchanged for invalid element', () => {
	const linkedList = new LinkeList();
	linkedList.push( 'KZN' ).push( 'Gauteng' ).push( 'Limpopo' );
	linkedList.remove( 'FreeState' );
	expect( linkedList.toString() ).toBe( 'KZN,Gauteng,Limpopo' );
} );

test( 'size() returns number of elements in the linkedList', () => {
	const linkedList = new LinkeList();
	linkedList.push( 'KZN' ).push( 'Gauteng' ).push( 'Limpopo' );
	expect( linkedList.size() ).toBe( 3 );
} );

test( 'getHead() returns the head of the list', () => {
	const linkedList = new LinkeList();
	linkedList.push( 'KZN' ).push( 'Gauteng' ).push( 'Limpopo' );
	expect( linkedList.getHead().element ).toBe( 'KZN' );
} );



