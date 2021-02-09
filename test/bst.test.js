const BinarySearchTree = require( '../data-structures/bst' );

test( 'In-order traversal traverses bst correctly', () => {
	const tree = [];

	const bst = new BinarySearchTree();
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

test( 'pre-order traversal traverses bst correctly', () => {
	const tree = [];

	const bst = new BinarySearchTree();
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