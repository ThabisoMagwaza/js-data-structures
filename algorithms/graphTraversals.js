const Queue = require( '../data-structures/queue' );
const Stack = require( '../data-structures/stack' );

const Colors = {
	WHITE: 0,
	GREY: 1,
	BLACK: 2
};

const initializeColor = vertices => {
	return vertices.reduce( ( acc,v ) => {
		acc[v] = Colors.WHITE;
		return acc;
	}, {} );
};

/**
 * Uses the Beadth first search algorithm to traverse the graph and call an optional callback at every vertex
 * @param {Graph} graph 
 * @param {*} startVertex 
 * @param {*} callback 
 */
module.exports.breadthFirstSearch = ( graph, startVertex, callback ) => {
	const vertices = graph.getVertices();
	const adjList = graph.getAdjList();
	const color = initializeColor( vertices );
	const queue = new Queue();
	const distances = {};
	const predecessors = {};

	vertices.forEach( v => {
		distances[v] = 0;
		predecessors[v] = null;
	} );

	queue.enqueue( startVertex );

	while( !queue.isEmpty() ){
		const u = queue.dequeue();
		const neighbors = adjList.get( u );
		color[u] = Colors.GREY;
		neighbors.forEach( v => {
			if( color[v] === Colors.WHITE ) {
				color[v] = Colors.GREY;
				distances[v] = distances[u] + 1;
				predecessors[v] = u; 
				queue.enqueue( v );
			}
		} );
		color[u] = Colors.BLACK;
		if( callback ) callback( u );
	}

	return {
		distances,
		predecessors
	};
};

/**
 * Traverses graph using the depth first search algorithm and calls the optional callback function on every vertex
 * @param {Graph} graph 
 * @param {Function} callback 
 */
module.exports.depthFistSearch = ( graph, callback ) => {
	const vertices = graph.getVertices();
	const adjList = graph.getAdjList();
	const colors = initializeColor( vertices );

	vertices.forEach( v => {
		if( colors[v] === Colors.WHITE ) depthFistSearchVisit( v, colors,adjList, callback );
	} );
};

/**
 * 
 * @param {*} u 
 * @param {*} colors 
 * @param {Dictionary} adjList 
 * @param {*} callback 
 */
const depthFistSearchVisit = ( u, colors, adjList, callback ) => {
	colors[u] = Colors.GREY;
	if( callback ) callback( u );
	const neighbors = adjList.get( u );
	neighbors.forEach( w => {
		if( colors[w] === Colors.WHITE ) depthFistSearchVisit( w, colors, adjList, callback );
	} );
	colors[u] = Colors.BLACK;
};

const DFSVisit = ( u, colors, d, f, p, time, adjList ) => {
	colors[u] = Colors.GREY;
	d[u] = ++time.count;
	const neighbors = adjList.get( u );
	neighbors.forEach( n => {
		p[n] = u; 
		if( colors[n] === Colors.WHITE ) DFSVisit( n,colors,d,f,p,time,adjList );
	} );
	colors[u] = Colors.BLACK;
	f[u] = ++time.count;
};

/**
 * Traverses graph using DFS algorithm
 * @param {Graph} graph 
 * @returns {Object} object with discovery time, finish-time and predecessor of each vertex
 */
module.exports.DFS = graph => {
	const vertices = graph.getVertices();
	const adjList = graph.getAdjList();
	const colors = initializeColor( vertices );
	const d = {};
	const f = {};
	const p = {};

	const time = {count:  0};
	vertices.forEach( v => {
		d[v] = 0,
		f[v] = 0,
		p[v] = null;
	} );

	vertices.forEach( v => {
		if( colors[v] === Colors.WHITE ) DFSVisit( v, colors, d, f, p, time, adjList );
	} );

	return {
		d,
		f,
		p
	};
};



/**
 * Returns the shortest path from vertex v to w of the graph
 * @param {Graph} graph 
 * @param {*} v 
 * @param {*} w 
 * @returns {string} shortest path from v to w
 */
module.exports.BFSshortestPath = ( graph, v, w ) => {
	const {predecessors} = this.breadthFirstSearch( graph,v );
	const reversePath = new Stack();
	
	reversePath.push( w );

	let pre = predecessors[w];
	while( pre !== null ){
		reversePath.push( pre );
		pre = predecessors[pre];
	}
	
	const path = [];
	while( !reversePath.isEmpty() ){
		path.push( reversePath.pop() );
	}
	return path.toString();
};

const INF = Number.MAX_SAFE_INTEGER;

/**
 * Calculate shortest path of adjacency matrix using dijkstra algorithm
 * @param {*} graph 
 * @param {*} src 
 */
module.exports.dijkstra = ( graph, src ) => {
	const dist = [];
	const visited = [];
	const { length } = graph;
	for ( let i = 0; i < length; i++ ) { // {1}
		dist[i] = INF;
		visited[i] = false;
	}
	dist[src] = 0; // {2}
	for ( let i = 0; i < length - 1; i++ ) { // {3}
		const u = minDistance( dist, visited ); // {4}
		visited[u] = true; // {5}
		for ( let v = 0; v < length; v++ ) {
			if ( !visited[v] &&
    graph[u][v] !== 0 &&
    dist[u] !== INF &&
    dist[u] + graph[u][v] < dist[v] ) { // {6}
				dist[v] = dist[u] + graph[u][v]; // {7}
			}
		}
	}
	return dist; // {8}
};

const minDistance = ( dist, visited ) => {
	let min = INF;
	let minIndex = -1;
	for ( let v = 0; v < dist.length; v++ ) {
		if ( visited[v] === false && dist[v] <= min ) {
			min = dist[v];
			minIndex = v;
		}
	}
	return minIndex;
};

/**
 * Calculate shortest path of adjacency matrix using floydWarshall algorithm
 * @param {*} graph 
 */
module.exports.floydWarshall = graph => {
	const dist = [];
	const { length } = graph;
	for ( let i = 0; i < length; i++ ) { // {1}
		dist[i] = [];
		for ( let j = 0; j < length; j++ ) {
			if ( i === j ) {
				dist[i][j] = 0; // {2}
			} else if ( !isFinite( graph[i][j] ) ) {
				dist[i][j] = Infinity; // {3}
			} else {
				dist[i][j] = graph[i][j]; // {4}
			}
		}
	}
	for ( let k = 0; k < length; k++ ) { // {5}
		for ( let i = 0; i < length; i++ ) {
			for ( let j = 0; j < length; j++ ) {
				if ( dist[i][k] + dist[k][j] < dist[i][j] ) { // {6}
					dist[i][j] = dist[i][k] + dist[k][j]; // {7}
				}
			}
		}
	}
	return dist;
};