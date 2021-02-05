module.exports = class Set {
	constructor(){
		this.items = {};
	}
    
	/**
     * Add new element to the set
     * @param {*} element 
     * @returns {Set} Extended set
     */
	add( element ){
		if( !this.has( element ) ){
			this.items[element] = element;
			return true;
		}
        
		return false;
	}
    
	/**
     * Removes element from the set
     * @param {*} element 
     * @returns element that was removed
     */
	delete( element ) {
		if( this.has( element ) ){
			delete this.items[element];
			return true;
		}
		return false;
	}
    
	/**
     * Check if an element exists in the set
     * @param {*} element 
     * @returns {boolean} true if the element exists, false otherwise
     */
	has( element ) {
		return Object.prototype.hasOwnProperty.call( this.items,element );
	}
    
	/**
     * Clear set
     */
	clear() {
		this.items = {};
	}
    
	/**
     * @returns {number} Number of elements in the set
     */
	size() {
		return Object.keys( this.items ).length;
	}
    
	/**
     * @returns {Array} An array of all the values in the set
     */
	values() {
		return Object.values( this.items );
	}
    
	/**
     * Create a union set between this set and another
     * @param {Set} otherSet
     * @returns {Set} Union of this set with the other Set 
     */
	union( otherSet ) {
		const unionSet = new Set();
		[...this.values(), ...otherSet.values()].forEach( el => unionSet.add( el ) );
		return unionSet;
	}
    
	/**
     * Create a set containin the intersection between the two sets
     * @param {Set} otherSet 
     * @returns {Set} intersetion set with otherSet
     */
	intersection( otherSet ) {
		const intersection = new Set();
        
		if( otherSet.size() < this.size() ){
			otherSet.values().forEach( e => {
				if( this.has( e ) ) {
					intersection.add( e );
				}
			} );
		}else{
			this.values().forEach( e => {
				if( otherSet.has( e ) ) {
					intersection.add( e );
				}
			} );
		}
        
		return intersection;
	}
    
	/**
     * Creates a differece set between this set and another set
     * @param {Set} otherSet 
     * @returns {Set} Difference set
     */
	difference( otherSet ) {
		const differenceSet = new Set();
        
		this.values().forEach( e => {
			if( !otherSet.has( e ) ){
				differenceSet.add( e );
			}
		} );
        
		return differenceSet;
	}
    
	/**
     * Determines if this set is a subset of another st
     * @param {Set} otherSet
     * @returns {boolean} true if this set is a subset the other set, false otherwise
     */
	isInstanceOf( otherSet ) {
		if( this.size() > otherSet.size() ) return false;
        
		return this.values().every( e => !otherSet.has( e ) ? false :  true );
	}
};