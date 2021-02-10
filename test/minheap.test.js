const MinHeap = require( '../data-structures/minheap' );

test( 'MinHead maintains heap property after multiple insterts', () => {
	const heap = new MinHeap();
	for( let i = 10; i > 0; i-- ){
		heap.insert( i );
	}
	expect( heap.extract() ).toBe( 1 );
} );

test( 'MinHead maintains heap property after multiple extracts', () => {
	const heap = new MinHeap();
	for( let i = 10; i > 0; i-- ){
		heap.insert( i );
	}
	heap.extract();
	heap.extract();
	heap.extract();
	expect( heap.extract() ).toBe( 4 );
} );