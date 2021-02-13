/**
 * Problem: Given n stairs the preson can take either 2 or 3 steps to the top.
 * Count the total number of ways that the person can use to get to the top.
 */

/**
 * Counts the number of ways to get to n stairs  
 * @param {number} n 
 * @returns number of ways
 */
module.exports.countStairsRecursive = n => {
	return countStartsLoop( n );
};

function countStartsLoop( n ) {
	if( n === 0 ) return 1;
	if( n === 1 ) return 1;
	return countStartsLoop( n - 1 ) + countStartsLoop( n - 2 );
}

module.exports.countStaireIterative = n => {
	const count = [1,1];
	for( let i = 2; i <= n; i++ ){
		count.push( count[i - 2] + count[i - 1 ] );
	}
	return count[n];
};