# AVL Tree Project

## Description

This project implements an AVL Tree, a self-balancing binary search tree, in the Node.js environment. The AVL Tree is optimized to maintain a balance factor of -1, 0, or 1 for each node, ensuring that the tree's height remains logarithmic in relation to the number of nodes, resulting in fast insertions, deletions, and searches.

## Features

- **Insert and Delete** nodes while maintaining balance
- Perform **rotations** to restore balance after insertions and deletions
- **Search** for a node by its value
- **Traversal** methods for In-order, Pre-order, and Post-order
- **Visualization** of the tree structure with height information for each node
- Methods to **get the minimum** and **maximum** values in the tree
- **Balance check** to determine if the tree is properly balanced

## Setup and Installation

### Prerequisites

Ensure you have the following installed:

- Node.js (v14.x or higher)
- npm (Node package manager)

### Installation

1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/your-username/avl-tree.git
   ```
2. Navigate to the project folder:
   ```bash
   cd avl-tree
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

### Usage

You can use this AVL Tree implementation in your Node.js projects by importing the classes and creating an instance of the `AVLTree` class.

#### Example Usage:

```javascript
import { AVLTree } from './AVLTree';

const avl = new AVLTree();
avl.add(10);
avl.add(20);
avl.add(5);
avl.add(15);

console.log('In-Order Traversal: ', avl.inOrder()); // Output: [5, 10, 15, 20]
console.log('Tree Height: ', avl.getTreeHeight()); // Output: 3

avl.remove(10);
console.log('After Removal (In-Order Traversal): ', avl.inOrder()); // Output: [5, 15, 20]
```

### Available Methods

#### `AVLNode` class

- **Constructor**:
  - `new AVLNode(value: number)` - Creates a new node with the given value.

#### `AVLTree` class

- **Constructor**:

  - `new AVLTree()` - Creates a new empty AVL Tree.

- **getHeight(node: AVLNode | null): number**

  - Returns the height of the given node. If the node is null, it returns 0.

- **getTreeHeight(): number**

  - Returns the height of the entire tree (the height of the root node).

- **getSize(node?: AVLNode | null): number**

  - Returns the size (number of nodes) of the tree or a subtree rooted at the given node.

- **getBalanceFactor(node: AVLNode | null): number**

  - Returns the balance factor of the given node. This is the difference between the heights of the left and right subtrees.

- **isBalanced(node?: AVLNode | null): boolean**

  - Returns `true` if the tree (or subtree) is balanced, meaning that the balance factor for every node is -1, 0, or 1.

- **rotateRight(unbalancedNode: AVLNode): AVLNode**

  - Performs a right rotation (used for LL imbalance).

- **rotateLeft(unbalancedNode: AVLNode): AVLNode**

  - Performs a left rotation (used for RR imbalance).

- **insert(node: AVLNode | null, value: number): AVLNode**

  - Inserts a new value into the tree and rebalances it if necessary.

- **add(value: number): void**

  - Wrapper method for `insert` to insert a value into the tree.

- **deleteNode(node: AVLNode | null, value: number): AVLNode | null**

  - Deletes a node with the specified value from the tree and rebalances it if necessary.

- **remove(value: number): void**

  - Wrapper method for `deleteNode` to delete a value from the tree.

- **search(value: number, node?: AVLNode | null): AVLNode | null**

  - Searches for a node with the specified value in the tree or subtree.

- **getMinValueNode(node: AVLNode | null): AVLNode | null**

  - Returns the node with the minimum value in the tree or subtree.

- **getMin(): number | null**

  - Returns the minimum value in the tree.

- **getMaxValueNode(node: AVLNode | null): AVLNode | null**

  - Returns the node with the maximum value in the tree or subtree.

- **getMax(): number | null**

  - Returns the maximum value in the tree.

- **inOrder(node?: AVLNode | null, result?: number[]): number[]**

  - Performs an in-order traversal of the tree (sorted order).

- **preOrder(node?: AVLNode | null, result?: number[]): number[]**

  - Performs a pre-order traversal of the tree.

- **postOrder(node?: AVLNode | null, result?: number[]): number[]**

  - Performs a post-order traversal of the tree.

- **visualize(node?: AVLNode | null, prefix?: string, isLeft?: boolean): string**

  - Visualizes the tree structure, showing node values and their heights.

- **print(): void**
  - Prints a visual representation of the tree to the console.

## Example Project Structure

```plaintext
avl-tree/
│
├── src/
│   ├── AVLTree.ts        # AVL Tree class implementation
│   ├── AVLNode.ts        # AVLNode class implementation
│
├── package.json          # Project dependencies and scripts
├── README.md             # This documentation
└── index.ts              # Entry point for the project
```

## Tests

You can write unit tests for your AVL Tree to ensure all methods are working as expected. You may use testing libraries like Jest or Mocha for this purpose.

### Example Test Case:

```javascript
import { AVLTree } from './AVLTree';

test('insert and search values', () => {
  const avl = new AVLTree();
  avl.add(10);
  avl.add(20);
  avl.add(5);

  expect(avl.search(10)).not.toBeNull();
  expect(avl.search(100)).toBeNull();
});
```

## Contributing

Contributions are welcome! Please feel free to fork this repository and submit pull requests for improvements or bug fixes.

### License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
