/**
 * Converts item to it's string representation
 * @param {*} item 
 * @returns {string} String representation of item
 */
module.exports = item => {
	if( item === null ) return 'NULL';
	if( item === undefined ) return 'UNDEFINED';
	if( typeof item === 'string' || item instanceof String ) return `${item}`;
	return item.toString();
};