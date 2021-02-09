const defaultToString = require( '../utils/defaultToString' );
const {ValuePair} = require( '../models/dictionary-models' );

module.exports = class Dictionary {
	constructor( toStringFn = defaultToString ){
		this.toStringFn = toStringFn;
		this.table = {};
	}
    
	/**
     * Inserts a [key,value] pair
     * @param {*} key 
     * @param {*} value 
     */
	set( key,value ) {
		if( !key || !value ) return false;
        
		const tableKey = this.toStringFn( key );
		this.table[tableKey] = new ValuePair( tableKey,value );
		return true;
	}
    
	/**
     * Remove [key,value] pair by key
     * @param {*} key 
     */
	remove( key ) { 
		if( this.hasKey( key ) ) {
			delete this.table[this.toStringFn( key )];
			return true;
		}
		return false;
	}
    
	/**
     * Checks if key exists
     * @param {*} key 
     * @returns {boolean} true if key is in the dictionary, false otherwise
     */
	hasKey( key ){
		return this.table[this.toStringFn( key )] !== null;
	}
    
	/**
     * Returns value from dictionary using key as search term
     * @param {*} key 
     */
	get( key ){
		const valuePair = this.table[this.toStringFn( key )];
		return valuePair ? valuePair.value : undefined;
	}

	/**
     * Removes all [key,value] pairs from the dictionary
     */
	clear(){
		this.table = {};
	}
    
	/**
     * Returns the number of records in the dictionary
     */
	size() {
		return Object.keys( this.table ).length;
	}
    
	/**
     * @returns {boolean} true if dictionary is empty, false otherwise
     */
	isEmpty(){
		return this.size() === 0;
	}
    
	/**
     * @returns {Array} array of all keys in the dictionary
     */
	keys() {
		return Object.values( this.table ).map( valuePair => valuePair.key );
	}
    
	/**
     * @returns {Array} array of all the values in the dictionary
     */
	values(){
		return Object.values( this.table ).map( valuePair => valuePair.value );
	}
    
	/**
     * @returns {Array} array of all the entries ([key,value]) in the dictionary
     */
	keyValues(){
		return Object.values( this.table );
	}
    
	/**
     * Applies callbackFn to every element int the dictionary
     * @param {Function} callbackFn 
     */
	forEach( callbackFn ) {
		const valuePairs = this.keyValues();
		valuePairs.every( valuePair => {
			const res = callbackFn( valuePair.key, valuePair.value );
			return !res ? false : true;
		} );
	}
    
	/**
     * Create string representation of the dictionary
     * @returns {string} String representation of the dictionary
     */
	toString() {
		if ( this.isEmpty() ) {
			return '';
		}
		const valuePairs = this.keyValues();
		let objString = `${valuePairs[0].toString()}`;
		for ( let i = 1; i < valuePairs.length; i++ ) {
			objString = `${objString},${valuePairs[i].toString()}`; 
		}
		return objString;
	}
};