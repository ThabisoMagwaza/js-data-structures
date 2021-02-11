const Graph = require( '../data-structures/graph' );
const { breadthFirstSearch, BFSshortestPath } = require( '../algorithms/graphTraversals' );

test( 'BreadthFirstSearch returs corect order of traversal', () => {
	const graph = new Graph();
	const vertices = [ 'A', 'B', 'C', 'D'];
	vertices.forEach( v => graph.addVertex( v ) );

	graph.addEdge( 'A','B' );
	graph.addEdge( 'A','C' );
	graph.addEdge( 'B','D' );
	graph.addEdge( 'D','A' );

	const arr = [];
	breadthFirstSearch( graph,'B',v => arr.push( v ) );
	expect( arr.toString() ).toBe( 'B,A,D,C' );
} );

test( 'shortest returs corect order of traversal', () => {
	const graph = new Graph();
	const vertices = [ 'A', 'B', 'C', 'D', 'E', 'F'];
	vertices.forEach( v => graph.addVertex( v ) );

	graph.addEdge( 'A','B' );
	graph.addEdge( 'A','C' );
	graph.addEdge( 'A','D' );
	graph.addEdge( 'C','F' );
	graph.addEdge( 'D','F' );
	graph.addEdge( 'D','E' );
	graph.addEdge( 'F','E' );
	
	expect( BFSshortestPath( graph,'A','E' ) ).toBe( 'A,D,E' );
} );