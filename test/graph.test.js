const Graph = require( '../data-structures/graph' );

test( 'Add Vertices correctly', () => {
	const graph = new Graph();
	const vertices = [ 'A', 'B', 'C', 'D'];
	vertices.forEach( v => graph.addVertex( v ) );
	expect( graph.getVertices() ).toEqual( vertices );
} );

test( 'Add edges correctly correctly', () => {
	const graph = new Graph();
	const vertices = [ 'A', 'B', 'C', 'D'];
	vertices.forEach( v => graph.addVertex( v ) );

	graph.addEdge( 'A','B' );
	graph.addEdge( 'A','C' );
	graph.addEdge( 'B','D' );
	graph.addEdge( 'D','A' );

	expect( graph.getAdjList().get( 'A' ) ).toEqual( ['B','C','D'] );
} );

test( 'toString displays graph string', () => {
	const graph = new Graph();
	const vertices = [ 'A', 'B', 'C', 'D'];
	vertices.forEach( v => graph.addVertex( v ) );

	graph.addEdge( 'A','B' );
	graph.addEdge( 'A','C' );
	graph.addEdge( 'B','D' );
	graph.addEdge( 'D','A' );

	expect( graph.toString() ).toBe( 'A -> B,C,D\nB -> A,D\nC -> A\nD -> B,A' );
} );