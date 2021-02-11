const INF = Number.MAX_SAFE_INTEGER;

const minKey = ( dist, visited ) => {
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
 * Use Prim's algorithm to find the minimum spanning tree of the graph
 * @param {Array} graph 
 */
module.exports.prim = graph => {
	const parent = [];
	const key = [];
	const visited = [];
	const { length } = graph;
	for ( let i = 0; i < length; i++ ) { // {1}
		key[i] = INF;
		visited[i] = false;
	}
	key[0] = 0; // {2}
	parent[0] = -1;
	for ( let i = 0; i < length - 1; i++ ) { // {3}
		const u = minKey( graph, key, visited ); // {4}
		visited[u] = true; // {5}
		for ( let v = 0; v < length; v++ ) {
			if ( graph[u][v] && !visited[v] && graph[u][v] < key[v] ) { // {6}
				parent[v] = u; // {7}
				key[v] = graph[u][v]; // {8}
			}
		}
	}
	return parent; // {9}
};

const find = ( i, parent ) => {
	while ( parent[i] ) {
		i = parent[i];
	}
	return i;
};

const union = ( i, j, parent ) => {
	if ( i !== j ) {
		parent[j] = i;
		return true;
	}
	return false;
};

/**
 * Use kruskal's algorithm to find the minimum spanning tree of the graph
 * @param {Array} graph 
 */
module.exports.kruskal = graph => {
	const { length } = graph;
	const parent = [];
	let ne = 0;
	let a; let b; let u; let v;
	const cost = JSON.parse( JSON.stringify( graph ) ); // {1}
	while ( ne < length - 1 ) { // {2}
		for ( let i = 0, min = INF; i < length; i++ ) { // {3}
			for ( let j = 0; j < length; j++ ) {
				if ( cost[i][j] < min ) {
					min = cost[i][j];
					a = u = i;
					b = v = j;
				}
			}
		}
		u = find( u, parent ); // {4}
		v = find( v, parent ); // {5}
		if ( union( u, v, parent ) ) { // {6}
			ne++;
		}
		cost[a][b] = cost[b][a] = INF; // {7}
	}
	return parent;
};