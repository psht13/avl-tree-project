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
