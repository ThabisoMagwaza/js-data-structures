const Node = require( '../models/tree-models' );
const {defaultCompare, Compare} = require( '../utils/defaultCompare' );

module.exports = class BinarySearchTree {
	/**
     * Function to compare the keys stored in the tree
     * @param {Function} compareFn 
     */
	constructor( compareFn = defaultCompare ){
		this.compareFn = compareFn;
		this.root = null;
	}

	/**
     * Insert new key
     * @param {*} key 
     */
	insert( key ) {
		this.root === null ? this.root = new Node( key ) : this.insertNode( this.root, key );
	}

	/**
     * Insert key using root as the starting point
     * @param {*} root 
     * @param {*} key 
     */
	insertNode( node, key ){
		if( this.compareFn( key,node.key ) === Compare.LESS_THAN ){
			if( node.left === null ) {
				node.left = new Node( key );
			}
			else {
				this.insertNode( node.left,key );
			}
		}else{
			if( node.right === null ){
				node.right = new Node( key );
			}else{
				this.insertNode( node.right,key );
			}
		}
	}

	/**
     * Search for key in the tree
     * @param {*} key 
     * @returns {boolean} true if key is found, false otherwise
     */
	search( key ) {
		return this.searchNode( this.root,key );
	}

	searchNode( node, key ){
		if( node === null ){
			return false;
		}else if( this.compareFn( key, node.key ) === Compare.LESS_THAN ){
			return this.searchNode( node.left, key );
		}else if( this.compareFn( key, node.key ) === Compare.GREATER_THAN ){
			return this.searchNode( node.right, key );
		}else{
			return true;
		}
	}

	/**
     * Traverse the tree using in-order traversal
     */
	inOrderTraverse( callback ){
		this.inOrderTraverseNode( this.root,callback );
	}

	inOrderTraverseNode( node, callback ){
		if( node !== null ) {
			this.inOrderTraverseNode( node.left,callback );
			callback( node.key );
			this.inOrderTraverseNode( node.right,callback );
		}
	}

	/**
     * Traverse the tree using pre-order traversal
     */
	preOrderTraverse( callback ) {
		this.preOrderTraverseNode( this.root, callback );
	}

	preOrderTraverseNode( node,callback ){
		if( node !== null ){
			callback( node.key );
			this.preOrderTraverseNode( node.left, callback );
			this.preOrderTraverseNode( node.right, callback );
		}
	}
	/**
     * Traverse the tree using post-order traversal
     */
	postOrderTraverse( callback ) {
		this.postOrderTraverseNode( this.root, callback );
	}

	postOrderTraverseNode( node,callback ){
		if( node !== null ){
			this.postOrderTraverseNode( node.left, callback );
			this.postOrderTraverseNode( node.right, callback );
			callback( node.key );
		}
	}

	/**
     * @returns Min key/value in the tree
     */
	min(){
		return this.minNode( this.root );
	}

	minNode( node ){
		let current = node;
		while( current !== null && current.left !== null ){
			current = current.left;
		}
		return current.key;
	}

	findMinNode( node ){
		let current = node;
		while( current !== null && current.left !== null ){
			current = current.left;
		}
		return current;
	}

	/**
     * @returns Max key/value in the tree
     */
	max(){
		return this.maxNode( this.root );
	}

	maxNode( node ) {
		let current = node;
		while( current !== null && current.right !== null ){
			current = current.right;
		}
		return current.key;
	}

	/**
     * Remove key from the tree
     * @param {*} key 
     */
	remove( key ) {
		this.root = this.removeNode( this.root, key );
	}

	removeNode( node,key ) {
		if( node === null ){
			return null;
		}

		if( this.compareFn( key,node.key ) === Compare.LESS_THAN ){
			node.left = this.removeNode( node.left, key );
			return node;
		}else  if( this.compareFn( key,node.key ) === Compare.GREATER_THAN ){
			node.right = this.removeNode( this.right, key );
			return node;
		}else {
			// key is equal to node.item
			// case 1
			if( node.left === null && node.right === null ) {
				node = null;
				return node;
			}
			// case 2
			if( node.left === null ) {
				node = node.right;
				return node;
			}else if( node.right === null ) {
				node = node.left;
				return node;
			}

			// case 3
			const aux = this.findMinNode( node.right );
			node.key = aux.key;
			node.right = this.removeNode( node.right, aux.key );
			return node;
		}
	}

};