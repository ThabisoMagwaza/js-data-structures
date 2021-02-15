/**
 * Calculates the number of ways that denomination d can be used to give change n
 * @param {number} n desired change amount
 * @param {Array} d denominations
 * @returns {number} number of ways that change n can be made
 */
module.exports.calcNumberOfChange = ( n,d ) => {
	const waysArr = new Array( n+1 ).fill( 0 );
	waysArr[0] = 1;
	d.forEach( coin => {
		waysArr.forEach( ( ways,index ) => {
			if( index >= coin ) waysArr[index] = waysArr[index - coin] + ways;
		} );
	} );
	return waysArr[n];
};