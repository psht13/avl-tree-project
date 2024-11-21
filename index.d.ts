declare class AVLNode {
  value: any;
  left: AVLNode | null;
  right: AVLNode | null;
  height: number;

  constructor(value: any);
}

declare class AVLTree {
  root: AVLNode | null;

  constructor();

  add(value: any): void;
  insert(node: AVLNode | null, value: any): AVLNode;
  rotateRight(node: AVLNode): AVLNode;
  rotateLeft(node: AVLNode): AVLNode;
  getHeight(node: AVLNode | null): number;
  getBalanceFactor(node: AVLNode): number;

  inOrder(): any[];
}

export default AVLTree;
