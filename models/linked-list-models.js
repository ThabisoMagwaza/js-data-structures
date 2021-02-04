module.exports.Node = class Node {
	constructor( element ){
		this.element = element;
		this.next = null;
	}
};

module.exports.DoublyNode = class DoublyNode extends Node {
	constructor( element ) {
		super( element );
		this.prev = null;
	}
};