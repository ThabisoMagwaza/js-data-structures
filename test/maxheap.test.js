const MaxHeap = require( '../data-structures/maxheap' );

test( 'MinHead maintains heap property after multiple insterts', () => {
	const heap = new MaxHeap();
	for( let i = 10; i > 0; i-- ){
		heap.insert( i );
	}
	expect( heap.extract() ).toBe( 10 );
} );

test( 'MinHead maintains heap property after multiple extracts', () => {
	const heap = new MaxHeap();
	for( let i = 10; i > 0; i-- ){
		heap.insert( i );
	}
	heap.extract();
	heap.extract();
	heap.extract();
	expect( heap.extract() ).toBe( 7 );
} );