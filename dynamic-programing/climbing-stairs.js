// ------------------------------------------ COMBINATORY -------------------------------------------------

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

// ------------------------------------------ OPTIMIZATION -------------------------------------------------
/**
 * Find the optimal path (in terms of price) that you can use to get to the nth step
 *
 */

/**
 * 
 * @param {Array} prices
 */
module.exports.countStairsCheapest = prices => {
	const costs = [0,prices[0],prices[1]];
	const prev = [0,0,0];
	for( let i = 3; i <= prices.length; i++ ){
		costs.push( min( costs[i-1], costs[i-2] ) + prices[i - 1] );
		prev.push( min( costs[i-1], costs[i-2] ) === costs[i - 1] ? i - 1 :  i - 2  );
	}
	const path = [];
	let i = prev.length - 1;
	path.push( i ); 
	while( i !== 0 ) {
		path.push( prev[i] );
		i = prev[i];
	}
	return {
		minCost: costs[costs.length - 1],
		path: path.reverse()
	};
};

function min( a,b ){
	if( a === b ) return a;
	return a < b ? a : b;
}
