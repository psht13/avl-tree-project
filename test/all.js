import AVLTree from '../lib/avl-tree.js';

const avl = new AVLTree();
let testsPassed = true;

// Test: Adding values
try {
  avl.add(50);
  avl.add(30);
  avl.add(70);
  avl.add(20);
  avl.add(40);
  avl.add(60);
  avl.add(80);
  if (avl.inOrder().join(',') !== '20,30,40,50,60,70,80') {
    console.error('Test failed: Adding values (In-order traversal incorrect)');
    testsPassed = false;
  }
} catch (err) {
  console.error('Error during adding values:', err);
  testsPassed = false;
}

// Test: Searching for a value
try {
  if (avl.search(40) === null) {
    console.error('Test failed: Value 40 should be found in the tree');
    testsPassed = false;
  }
  if (avl.search(100) !== null) {
    console.error('Test failed: Value 100 should not be found in the tree');
    testsPassed = false;
  }
} catch (err) {
  console.error('Error during searching values:', err);
  testsPassed = false;
}

// Test: Minimum and Maximum values
try {
  if (avl.getMin() !== 20) {
    console.error('Test failed: Minimum value should be 20');
    testsPassed = false;
  }
  if (avl.getMax() !== 80) {
    console.error('Test failed: Maximum value should be 80');
    testsPassed = false;
  }
} catch (err) {
  console.error('Error during min/max test:', err);
  testsPassed = false;
}

// Test: Deleting a value
try {
  avl.remove(30);
  if (avl.inOrder().join(',') !== '20,40,50,60,70,80') {
    console.error('Test failed: Removing 30 (In-order traversal incorrect)');
    testsPassed = false;
  }
} catch (err) {
  console.error('Error during removal test:', err);
  testsPassed = false;
}

// Test: Tree balance
try {
  if (!avl.isBalanced()) {
    console.error('Test failed: Tree should be balanced after operations');
    testsPassed = false;
  }
} catch (err) {
  console.error('Error during balance test:', err);
  testsPassed = false;
}

// Test: Tree height
try {
  if (avl.getTreeHeight() !== 3) {
    console.error('Test failed: Tree height should be 3');
    testsPassed = false;
  }
} catch (err) {
  console.error('Error during tree height test:', err);
  testsPassed = false;
}

// Test: Tree size
try {
  if (avl.getSize() !== 6) {
    console.error(
      'Test failed: Tree size should be 6 after removing one element',
    );
    testsPassed = false;
  }
} catch (err) {
  console.error('Error during tree size test:', err);
  testsPassed = false;
}

// Test: Traversals
try {
  if (avl.inOrder().join(',') !== '20,40,50,60,70,80') {
    console.error('Test failed: In-order traversal is incorrect');
    testsPassed = false;
  }
  if (avl.preOrder().join(',') !== '50,40,20,70,60,80') {
    console.error('Test failed: Pre-order traversal is incorrect');
    testsPassed = false;
  }
  if (avl.postOrder().join(',') !== '20,40,60,80,70,50') {
    console.error('Test failed: Post-order traversal is incorrect');
    testsPassed = false;
  }
} catch (err) {
  console.error('Error during traversal test:', err);
  testsPassed = false;
}

// Final result
if (testsPassed) {
  console.log('\x1b[32mAll tests passed successfully!\n');
} else {
  console.log('\n\x1b[31mNot all tests passed. Check the errors above.\n');
}
