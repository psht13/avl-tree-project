import AVLTree from './lib/avl-tree.js';

console.log('\nExample use cases:\n');

// Create an instance of the AVL tree
const avl = new AVLTree();

// Example: Adding values to the AVL tree
avl.add(50);
avl.add(70);
avl.add(20);
avl.add(40);
avl.add(60);
avl.add(80);
console.log('Tree after adding values:');
console.log('In-order Traversal:', avl.inOrder());

// Example: Searching for a value
const searchValue = 40;
const foundNode = avl.search(searchValue);
console.log(`Searching for ${searchValue}:`, foundNode ? 'Found' : 'Not Found');

// Example: Getting the minimum and maximum values
console.log('Minimum value in the tree:', avl.getMin());
console.log('Maximum value in the tree:', avl.getMax());

// Example: Deleting a value from the tree
avl.remove(20);
console.log('Tree after removing 20:');
console.log('In-order Traversal:', avl.inOrder());

// Example: Checking if the tree is balanced
console.log('Is the tree balanced?', avl.isBalanced());

// Example: Getting the height of the tree
console.log('Height of the tree:', avl.getTreeHeight());

// Example: Getting the size of the tree
console.log('Size of the tree (total nodes):', avl.getSize());

// Example: In-order traversal (sorted order)
console.log('In-order Traversal:', avl.inOrder());

// Example: Pre-order traversal
console.log('Pre-order Traversal:', avl.preOrder());

// Example: Post-order traversal
console.log('Post-order Traversal:', avl.postOrder());

// Example: Visualization
console.log('Visualization:\n');
avl.print();
