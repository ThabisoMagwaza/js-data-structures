const defaultToStringFn = require( '../utils/defaultToString' );
const {ValuePair} = require( '../models/dictionary-models' );

module.exports = class HashTable {
	constructor( toStringFn = defaultToStringFn ) {
		this.toStringFn = toStringFn;
		this.table = {};
	}
    
	/**
     * Add key value pair
     * @param {*} key 
     * @param {*} value 
     */
	put( key, value ) {
		if( !key || !value ) return false;
		const pos = this.hashCode( key );
		this.table[pos] = new ValuePair( key,value );
		return true;
	}
    
	/**
     * Removes key-value pair using key as search term
     * @param {*} key 
     */
	remove( key ) {
		const hash = this.hashCode( key );
		const valuePair = this.table[hash];
		if( !valuePair ) return false;

		delete this.table[hash];
		return true;
	}
    
	/**
     * Retrieves value using key as search term
     * @param {*} key 
     */
	get( key ) {
		const valuePair = this.table[this.hashCode( key )];
		return valuePair ? valuePair.value : undefined;
	}
    
	loseLoseHashCode( key ) {
		if( typeof key === 'number' ) return key;
    
		const tableKey = this.toStringFn( key );
		let hash = 0;
		for( let i = 0; i < tableKey.length; i++ ) {
			hash += tableKey.charCodeAt( i );
		}
        
		return hash % 37;
        
	}
    
	hashCode( key ) {
		return this.loseLoseHashCode( key );
	}
};