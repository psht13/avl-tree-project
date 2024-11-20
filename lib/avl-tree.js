class AVLNode {
  constructor(value) {
    this.value = value; // Node value
    this.left = null; // Left child
    this.right = null; // Right child
    this.height = 1; // Height of the node, initialized to 1 (leaf node)
  }
}

class AVLTree {
  constructor() {
    this.root = null; // Root of the tree
  }

  // Get the height of a node
  getHeight(node) {
    return node ? node.height : 0;
  }

  // Get the height of the tree
  getTreeHeight() {
    return this.getHeight(this.root);
  }

  // Get the size of the tree (total number of nodes)
  getSize(node = this.root) {
    if (!node) return 0;
    return 1 + this.getSize(node.left) + this.getSize(node.right);
  }

  // Calculate the balance factor of a node
  getBalanceFactor(node) {
    return node ? this.getHeight(node.left) - this.getHeight(node.right) : 0;
  }

  // Check if the tree is balanced
  isBalanced(node = this.root) {
    if (!node) return true;

    const balanceFactor = this.getBalanceFactor(node);
    if (Math.abs(balanceFactor) > 1) return false;

    return this.isBalanced(node.left) && this.isBalanced(node.right);
  }

  // Perform a right rotation (LL imbalance)
  rotateRight(unbalancedNode) {
    const newRoot = unbalancedNode.left;
    unbalancedNode.left = newRoot.right;
    newRoot.right = unbalancedNode;

    unbalancedNode.height =
      Math.max(
        this.getHeight(unbalancedNode.left),
        this.getHeight(unbalancedNode.right),
      ) + 1;
    newRoot.height =
      Math.max(this.getHeight(newRoot.left), this.getHeight(newRoot.right)) + 1;

    return newRoot;
  }

  // Perform a left rotation (RR imbalance)
  rotateLeft(unbalancedNode) {
    const newRoot = unbalancedNode.right;
    unbalancedNode.right = newRoot.left;
    newRoot.left = unbalancedNode;

    unbalancedNode.height =
      Math.max(
        this.getHeight(unbalancedNode.left),
        this.getHeight(unbalancedNode.right),
      ) + 1;
    newRoot.height =
      Math.max(this.getHeight(newRoot.left), this.getHeight(newRoot.right)) + 1;

    return newRoot;
  }

  // Insert a value into the AVL tree
  insert(node, value) {
    // Base case: insert the value as a new node
    if (!node) return new AVLNode(value);

    // Recursively insert into the left or right subtree
    if (value < node.value) {
      node.left = this.insert(node.left, value);
    } else if (value > node.value) {
      node.right = this.insert(node.right, value);
    } else {
      throw new Error('Duplicate values are not allowed in AVL tree.');
    }

    // Update height
    node.height =
      Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;

    // Balance the node
    const balanceFactor = this.getBalanceFactor(node);

    // LL imbalance
    if (balanceFactor > 1 && value < node.left.value) {
      return this.rotateRight(node);
    }

    // RR imbalance
    if (balanceFactor < -1 && value > node.right.value) {
      return this.rotateLeft(node);
    }

    // LR imbalance
    if (balanceFactor > 1 && value > node.left.value) {
      node.left = this.rotateLeft(node.left);
      return this.rotateRight(node);
    }

    // RL imbalance
    if (balanceFactor < -1 && value < node.right.value) {
      node.right = this.rotateRight(node.right);
      return this.rotateLeft(node);
    }

    return node;
  }

  // Add a value to the AVL tree
  add(value) {
    this.root = this.insert(this.root, value);
  }

  // Delete a value from the AVL tree
  deleteNode(node, value) {
    if (!node) return null; // Base case: node not found

    // Perform standard BST deletion
    if (value < node.value) {
      node.left = this.deleteNode(node.left, value);
    } else if (value > node.value) {
      node.right = this.deleteNode(node.right, value);
    } else {
      // Node with only one child or no child
      if (!node.left) return node.right;
      if (!node.right) return node.left;

      // Node with two children: Get the in order successor
      const successor = this.getMinValueNode(node.right);
      node.value = successor.value;
      node.right = this.deleteNode(node.right, successor.value);
    }

    // Update height and balance the tree
    node.height =
      Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
    const balanceFactor = this.getBalanceFactor(node);

    // LL imbalance
    if (balanceFactor > 1 && this.getBalanceFactor(node.left) >= 0) {
      return this.rotateRight(node);
    }

    // LR imbalance
    if (balanceFactor > 1 && this.getBalanceFactor(node.left) < 0) {
      node.left = this.rotateLeft(node.left);
      return this.rotateRight(node);
    }

    // RR imbalance
    if (balanceFactor < -1 && this.getBalanceFactor(node.right) <= 0) {
      return this.rotateLeft(node);
    }

    // RL imbalance
    if (balanceFactor < -1 && this.getBalanceFactor(node.right) > 0) {
      node.right = this.rotateRight(node.right);
      return this.rotateLeft(node);
    }

    return node;
  }

  // Wrapper method to delete a value
  remove(value) {
    this.root = this.deleteNode(this.root, value);
  }

  // Search for a value in the AVL tree
  search(value, node = this.root) {
    if (!node) return null; // Value not found
    if (value === node.value) return node; // Value found
    if (value < node.value) return this.search(value, node.left); // Search left
    return this.search(value, node.right); // Search right
  }

  // Get the node with the minimum value
  getMinValueNode(node) {
    let current = node;
    while (current && current.left) {
      current = current.left;
    }
    return current;
  }

  // Wrapper to get the minimum value in the tree
  getMin() {
    if (!this.root) return null;
    return this.getMinValueNode(this.root).value;
  }

  // Get the node with the maximum value
  getMaxValueNode(node) {
    let current = node;
    while (current && current.right) {
      current = current.right;
    }
    return current;
  }

  // Wrapper to get the maximum value in the tree
  getMax() {
    if (!this.root) return null;
    return this.getMaxValueNode(this.root).value;
  }

  // In-order traversal (sorted order)
  inOrder(node = this.root, result = []) {
    if (node) {
      this.inOrder(node.left, result);
      result.push(node.value);
      this.inOrder(node.right, result);
    }
    return result;
  }

  // Pre-order traversal
  preOrder(node = this.root, result = []) {
    if (node) {
      result.push(node.value);
      this.preOrder(node.left, result);
      this.preOrder(node.right, result);
    }
    return result;
  }

  // Post-order traversal
  postOrder(node = this.root, result = []) {
    if (node) {
      this.postOrder(node.left, result);
      this.postOrder(node.right, result);
      result.push(node.value);
    }
    return result;
  }

  visualize(node = this.root, prefix = '', isLeft = true) {
    if (!node) return '';

    const result = [];
    const branch = isLeft ? '└── ' : '├── ';
    const nextPrefix = isLeft ? '    ' : '│   ';

    // Recursively visualize the right subtree first (for proper alignment)
    if (node.right) {
      result.push(this.visualize(node.right, prefix + nextPrefix, false));
    }

    // Add the current node's value
    result.push(`${prefix}${branch}${node.value} (h=${node.height})\n`);

    // Recursively visualize the left subtree
    if (node.left) {
      result.push(this.visualize(node.left, prefix + nextPrefix, true));
    }

    return result.join('');
  }

  // Wrapper method for visualization
  print() {
    console.log(this.visualize());
  }
}

export default AVLTree;
