import AVLTree from '../lib/avl-tree.js'; // Import your AVL Tree implementation

// Function to generate an array of random numbers
function generateUniqueArray(size) {
  const set = new Set();
  while (set.size < size) {
    set.add(Math.floor(Math.random() * size * 10));
  }
  return Array.from(set);
}

// Utility function to measure the execution time of a given function
function benchmark(name, fn) {
  const start = performance.now();
  fn();
  const end = performance.now();
  console.log(`${name}: ${(end - start).toFixed(3)} ms`);
}

// Test AVL Tree by inserting, searching, and removing elements
function testAVLTree(data) {
  const avl = new AVLTree();
  data.forEach(num => avl.add(num)); // Insert elements
  data.forEach(num => avl.search(num)); // Search for elements
  data.forEach(num => avl.remove(num)); // Remove elements
}

// Test Array with linear search for comparison
function testArray(data) {
  const array = [];
  data.forEach(num => array.push(num)); // Insert elements
  // Search for elements using linear search
  data.forEach(num => array.includes(num));
  data.forEach(num => {
    const index = array.indexOf(num);
    if (index !== -1) array.splice(index, 1); // Remove elements
  });
}

// Test JavaScript's Set for comparison
function testSet(data) {
  const set = new Set();
  data.forEach(num => set.add(num)); // Insert elements
  data.forEach(num => set.has(num)); // Search for elements
  data.forEach(num => set.delete(num)); // Remove elements
}

// Main benchmark function
function main() {
  const dataSize = 100000; // Number of elements to test with
  const data = generateUniqueArray(100000); // Generates 10,000 unique values

  console.log(`Benchmark with ${dataSize} elements:`);

  benchmark('AVL Tree', () => testAVLTree(data)); // Benchmark AVL Tree
  // Benchmark Array with linear search
  benchmark('Array (Linear Search)', () => testArray(data));
  benchmark('Set', () => testSet(data)); // Benchmark Set
}

main();

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
