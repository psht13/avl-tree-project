class AVLTreeNode {
  constructor(value) {
    this.value = value; // Value of the node
    this.leftChild = null; // Left child
    this.rightChild = null; // Right child
    this.nodeHeight = 1; // Height of the node, initialized to 1 (leaf node)
  }
}

class AVLTree {
  constructor() {
    this.treeRoot = null; // Root of the tree
  }

  // Helper method to get the height of a node
  getNodeHeight(treeNode) {
    return treeNode ? treeNode.nodeHeight : 0;
  }

  // Helper method to calculate the balance factor of a node
  calculateBalanceFactor(treeNode) {
    if (!treeNode) return 0;
    return (
      this.getNodeHeight(treeNode.leftChild) -
      this.getNodeHeight(treeNode.rightChild)
    );
  }

  // Right rotation for balancing (LL imbalance)
  performRightRotation(unbalancedNode) {
    const newRoot = unbalancedNode.leftChild;
    const subtree = newRoot.rightChild;

    // Perform rotation
    newRoot.rightChild = unbalancedNode;
    unbalancedNode.leftChild = subtree;

    // Update heights
    unbalancedNode.nodeHeight =
      Math.max(
        this.getNodeHeight(unbalancedNode.leftChild),
        this.getNodeHeight(unbalancedNode.rightChild),
      ) + 1;
    newRoot.nodeHeight =
      Math.max(
        this.getNodeHeight(newRoot.leftChild),
        this.getNodeHeight(newRoot.rightChild),
      ) + 1;

    // Return new root
    return newRoot;
  }

  // Left rotation for balancing (RR imbalance)
  performLeftRotation(unbalancedNode) {
    const newRoot = unbalancedNode.rightChild;
    const subtree = newRoot.leftChild;

    // Perform rotation
    newRoot.leftChild = unbalancedNode;
    unbalancedNode.rightChild = subtree;

    // Update heights
    unbalancedNode.nodeHeight =
      Math.max(
        this.getNodeHeight(unbalancedNode.leftChild),
        this.getNodeHeight(unbalancedNode.rightChild),
      ) + 1;
    newRoot.nodeHeight =
      Math.max(
        this.getNodeHeight(newRoot.leftChild),
        this.getNodeHeight(newRoot.rightChild),
      ) + 1;

    // Return new root
    return newRoot;
  }

  // Insert a value into the AVL tree
  insertIntoTree(currentNode, newValue) {
    // Step 1: Perform normal BST insertion
    if (!currentNode) return new AVLTreeNode(newValue);
    if (newValue < currentNode.value) {
      currentNode.leftChild = this.insertIntoTree(
        currentNode.leftChild,
        newValue,
      );
    } else if (newValue > currentNode.value) {
      currentNode.rightChild = this.insertIntoTree(
        currentNode.rightChild,
        newValue,
      );
    } else {
      throw new Error('Duplicate values are not allowed in AVL tree.');
    }

    // Step 2: Update the height of the current node
    currentNode.nodeHeight =
      Math.max(
        this.getNodeHeight(currentNode.leftChild),
        this.getNodeHeight(currentNode.rightChild),
      ) + 1;

    // Step 3: Get the balance factor to check if the node is unbalanced
    const balanceFactor = this.calculateBalanceFactor(currentNode);

    // Step 4: Perform rotations to balance the tree
    // LL imbalance
    if (balanceFactor > 1 && newValue < currentNode.leftChild.value) {
      return this.performRightRotation(currentNode);
    }

    // RR imbalance
    if (balanceFactor < -1 && newValue > currentNode.rightChild.value) {
      return this.performLeftRotation(currentNode);
    }

    // LR imbalance
    if (balanceFactor > 1 && newValue > currentNode.leftChild.value) {
      currentNode.leftChild = this.performLeftRotation(currentNode.leftChild);
      return this.performRightRotation(currentNode);
    }

    // RL imbalance
    if (balanceFactor < -1 && newValue < currentNode.rightChild.value) {
      currentNode.rightChild = this.performRightRotation(
        currentNode.rightChild,
      );
      return this.performLeftRotation(currentNode);
    }

    // Return the unchanged node pointer
    return currentNode;
  }

  // Wrapper method to insert a value into the AVL tree
  addValue(value) {
    this.treeRoot = this.insertIntoTree(this.treeRoot, value);
  }

  // In-order traversal (sorted order)
  traverseInOrder(treeNode = this.treeRoot, result = []) {
    if (treeNode) {
      this.traverseInOrder(treeNode.leftChild, result);
      result.push(treeNode.value);
      this.traverseInOrder(treeNode.rightChild, result);
    }
    return result;
  }

  // Pre-order traversal
  traversePreOrder(treeNode = this.treeRoot, result = []) {
    if (treeNode) {
      result.push(treeNode.value);
      this.traversePreOrder(treeNode.leftChild, result);
      this.traversePreOrder(treeNode.rightChild, result);
    }
    return result;
  }

  // Post-order traversal
  traversePostOrder(treeNode = this.treeRoot, result = []) {
    if (treeNode) {
      this.traversePostOrder(treeNode.leftChild, result);
      this.traversePostOrder(treeNode.rightChild, result);
      result.push(treeNode.value);
    }
    return result;
  }
}

// Usage example
const balancedTree = new AVLTree();
balancedTree.addValue(10);
balancedTree.addValue(20);
balancedTree.addValue(30);
balancedTree.addValue(40);
balancedTree.addValue(50);
balancedTree.addValue(25);

console.log('In-order Traversal:', balancedTree.traverseInOrder());
console.log('Pre-order Traversal:', balancedTree.traversePreOrder());
console.log('Post-order Traversal:', balancedTree.traversePostOrder());
