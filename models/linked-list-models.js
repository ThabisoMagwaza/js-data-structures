module.exports.Node = class Node {
	constructor( element ){
		this.element = element;
		this.next = null;
	}
};

module.exports.DoublyNode = class DoublyNode extends this.Node {
	constructor( element ) {
		super( element );
		this.prev = null;
	}
};