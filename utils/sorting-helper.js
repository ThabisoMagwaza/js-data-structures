module.exports.createNonSortedArray = function createNonSortedArray( size ) { // 6
	const array = [];
	for ( let i = size; i > 0; i-- ) {
		array.push( i );
	}
	return array;
};