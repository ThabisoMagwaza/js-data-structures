module.exports.Compare = {
	LESS_THAN: -1,
	GREATER_THAN: 1
};

module.exports.defaultCompare = ( a, b ) => {
	if( a === b ) return 0;
	return a < b ? this.Compare.LESS_THAN : this.Compare.GREATER_THAN;
};

module.exports.reverseCompare = ( a , b ) => this.defaultCompare( b, a );