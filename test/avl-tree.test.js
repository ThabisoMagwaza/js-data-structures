const AVLTree = require( '../data-structures/avl-tree' );

test( 'In-order traversal traverses correctly', () => {
	const tree = [];

	const bst = new AVLTree();
	bst.insert( 7 );
	bst.insert( 5 );
	bst.insert( 3 );
	bst.insert( 6 );
	bst.insert( 9 );
	bst.insert( 8 );
	bst.insert( 10 );
	bst.inOrderTraverse( key => tree.push( key ) );
	expect( tree.toString() ).toBe( '3,5,6,7,8,9,10' );
} );

test( 'pre-order traversal traverses correctly', () => {
	const tree = [];

	const bst = new AVLTree();
	bst.insert( 7 );
	bst.insert( 5 );
	bst.insert( 3 );
	bst.insert( 6 );
	bst.insert( 9 );
	bst.insert( 8 );
	bst.insert( 10 );
	bst.preOrderTraverse( key => tree.push( key ) );
	expect( tree.toString() ).toBe( '7,5,3,6,9,8,10' );
} );

test( 'post-order traversal traverses bst correctly', () => {
	const tree = [];

	const bst = new AVLTree();
	bst.insert( 7 );
	bst.insert( 5 );
	bst.insert( 3 );
	bst.insert( 6 );
	bst.insert( 9 );
	bst.insert( 8 );
	bst.insert( 10 );
	bst.postOrderTraverse( key => tree.push( key ) );
	expect( tree.toString() ).toBe( '3,6,5,8,10,9,7' );
} );

test( 'min() returns smallest key', () => {

	const bst = new AVLTree();
	bst.insert( 7 );
	bst.insert( 5 );
	bst.insert( 3 );
	bst.insert( 6 );
	bst.insert( 9 );
	bst.insert( 8 );
	bst.insert( 10 );
	expect( bst.min() ).toBe( 3 );
} );

test( 'max() returns largets key', () => {

	const bst = new AVLTree();
	bst.insert( 7 );
	bst.insert( 5 );
	bst.insert( 3 );
	bst.insert( 6 );
	bst.insert( 9 );
	bst.insert( 8 );
	bst.insert( 10 );
	expect( bst.max() ).toBe( 10 );
} );

test( 'search() returns true if value is found', () => {

	const bst = new AVLTree();
	bst.insert( 7 );
	bst.insert( 5 );
	bst.insert( 3 );
	bst.insert( 6 );
	bst.insert( 9 );
	bst.insert( 8 );
	bst.insert( 10 );
	expect( bst.search( 6 ) ).toBe( true );
} );

test( 'search() returns false if value is not found', () => {

	const bst = new AVLTree();
	bst.insert( 7 );
	bst.insert( 5 );
	bst.insert( 3 );
	bst.insert( 6 );
	bst.insert( 9 );
	bst.insert( 8 );
	bst.insert( 10 );
	expect( bst.search( 20 ) ).toBe( false );
} );