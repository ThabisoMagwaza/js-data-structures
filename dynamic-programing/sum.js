/*
    Use dynamic programing to calculate the sum of an array
*/

/**
 * 
 * @param {Array} arr 
 */
module.exports.sumDPRecursive = function sumDPRecursive( arr ) {
	const size = arr.length - 1;
	return sumDP( arr, size );
};

function sumDP( arr, i ) {
	if( i > 0 ) return sumDP( arr, i - 1 ) + arr[i];
	return arr[0];
}

/**
 * 
 * @param {Array} arr 
 */
module.exports.sumDP = function sumDP( arr ) {
	const accSum = [arr[0]];
	for( let i = 1; i < arr.length; i++ ) {
		accSum.push( accSum[i - 1] + arr[i] );
	}
	return accSum[accSum.length - 1];
};