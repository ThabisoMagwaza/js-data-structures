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

test( 'removeAt() removes element from given index', () => {
	const linkedList = new LinkeList();
	linkedList.push( 'Gauteng' );
	linkedList.push( 'KZN' );
	linkedList.removeAt( 0 );
	linkedList.push( 'Limpopo' );
	linkedList.push( 'FreeState' );
	linkedList.removeAt( 1 );
	expect( linkedList.toString() ).toBe( 'KZN,Limpopo' );
} );