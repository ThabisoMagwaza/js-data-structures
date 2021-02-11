const Dictionary = require( './dictionary' );

module.exports = class Graph {
	constructor( isDirected = false ){
		this.isDirected = isDirected;
		this.vertices = [];
		this.adjList = new Dictionary();
	}

	/**
     * Adds a new vertex to the graph
     * @param {} v 
     */
	addVertex( v ) {
		if( !this.vertices.includes( v ) ){
			this.vertices.push( v );
			this.adjList.set( v , [] );
		}
	}

	/**
     * Connects vertices V and W. Add both vertices if they don't already exist.
     * @param {*} v 
     * @param {*} w 
     */
	addEdge( v, w ) {
		if( !this.adjList.get( v ) ){
			this.addVertex( v );
		}
		if( !this.adjList.get( w ) ){
			this.addVertex( w );
		}
		this.adjList.get( v ).push( w );
		if( !this.isDirected ){
			this.adjList.get( w ).push( v );
		}
	}

	/**
     * @returns {Array} a list of all the vertices
     */
	getVertices(){
		return this.vertices;
	}

	/**
     * @returns {Dictionary} list of adjacent vertices for all vertices
     */
	getAdjList(){
		return this.adjList;
	}

	toString() {
		const g =  this.vertices.reduce( ( edges,v ) => edges.concat( `${v} -> ${this.getAdjList().get( v ).toString()}` ) , [] );
		return g.join( '\n' );
	}
};