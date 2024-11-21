export class AVLNode {
  value: number;
  left: AVLNode | null;
  right: AVLNode | null;
  height: number;

  constructor(value: number);
}

export class AVLTree {
  root: AVLNode | null;

  constructor();

  getHeight(node: AVLNode | null): number;
  getTreeHeight(): number;
  getSize(node?: AVLNode | null): number;
  getBalanceFactor(node: AVLNode | null): number;
  isBalanced(node?: AVLNode | null): boolean;
  rotateRight(unbalancedNode: AVLNode): AVLNode;
  rotateLeft(unbalancedNode: AVLNode): AVLNode;
  insert(node: AVLNode | null, value: number): AVLNode;
  add(value: number): void;
  deleteNode(node: AVLNode | null, value: number): AVLNode | null;
  remove(value: number): void;
  search(value: number, node?: AVLNode | null): AVLNode | null;
  getMinValueNode(node: AVLNode | null): AVLNode | null;
  getMin(): number | null;
  getMaxValueNode(node: AVLNode | null): AVLNode | null;
  getMax(): number | null;
  inOrder(node?: AVLNode | null, result?: number[]): number[];
  preOrder(node?: AVLNode | null, result?: number[]): number[];
  postOrder(node?: AVLNode | null, result?: number[]): number[];
  visualize(node?: AVLNode | null, prefix?: string, isLeft?: boolean): string;
  print(): void;
}
