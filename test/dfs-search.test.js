const Graph = require( '../data-structures/graph' );
const {depthFistSearch} = require( '../algorithms/graphTraversals' );

test( 'Depth first search traverses entire graph' , () => {
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

	const arr = [];
	depthFistSearch( graph,v => arr.push( v ) );
	expect( arr.toString() ).toBe( 'A,B,C,F,D,E' );
} );

// test( 'topological sorting', () => {
// 	const graph = new Graph( true ); // directed graph
// 	const myVertices = ['A', 'B', 'C', 'D', 'E', 'F']; 
    
// 	myVertices.forEach( v => graph.addVertex( v ) );

// 	graph.addEdge( 'A', 'C' );
// 	graph.addEdge( 'A', 'D' );
// 	graph.addEdge( 'B', 'D' );
// 	graph.addEdge( 'B', 'E' );
// 	graph.addEdge( 'C', 'F' );
// 	graph.addEdge( 'F', 'E' );
// 	const result = DFS( graph );

// 	console.log( result );
// } );

