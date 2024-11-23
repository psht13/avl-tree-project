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

// Test JavaScript's Map for comparison
function testMap(data) {
  const map = new Map();
  data.forEach(num => map.set(num, true)); // Insert elements
  data.forEach(num => map.has(num)); // Search for elements
  data.forEach(num => map.delete(num)); // Remove elements
}

// Function to compare search speed only
function searchBenchmark(name, data, searchFn) {
  const start = performance.now();
  searchFn();
  const end = performance.now();
  console.log(`${name} Search: ${(end - start).toFixed(3)} ms`);
}

// Test search speed for pre-filled structures
function testSearchSpeed(data) {
  const avl = new AVLTree();
  const array = [];
  const set = new Set();
  const map = new Map();

  // Fill all data structures
  data.forEach(num => avl.add(num));
  data.forEach(num => array.push(num));
  data.forEach(num => set.add(num));
  data.forEach(num => map.set(num, true));

  // Benchmark search for all elements
  searchBenchmark('AVL Tree', data, () => {
    data.forEach(num => avl.search(num));
  });
  searchBenchmark('Array (Linear Search)', data, () => {
    data.forEach(num => array.includes(num));
  });
  searchBenchmark('Set', data, () => {
    data.forEach(num => set.has(num));
  });
  searchBenchmark('Map', data, () => {
    data.forEach(num => map.has(num));
  });
}

// Main benchmark function
function main() {
  const dataSize = 100000; // Number of elements to test with
  const data = generateUniqueArray(dataSize); // Generates unique values

  console.log(`Benchmark with ${dataSize} elements:`);

  // Full operation benchmarks
  benchmark('AVL Tree', () => testAVLTree(data));
  benchmark('Array (Linear Search)', () => testArray(data));
  benchmark('Set', () => testSet(data));
  benchmark('Map', () => testMap(data));

  console.log('\nSearch speed comparison for pre-filled structures:');
  testSearchSpeed(data); // Search speed only
  console.log('\n');
}

main();
