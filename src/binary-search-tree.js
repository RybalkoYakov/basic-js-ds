const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {
  #rootNode = null

  #addNewNode(node, data) {
    if (!node) return new Node(data)
    if (data === node.data) return node
    if (data > node.data) node.right = this.#addNewNode(node.right, data)
    else node.left = this.#addNewNode(node.left, data)
    return node
  }

  #searchNode(node, data) {
    if (node?.data === data) return true
    if (!node) return false
    if (data > node.data) return this.#searchNode(node.right, data)
    else return this.#searchNode(node.left, data)
  }

  #returnNode(node, data) {
    if (!node) return null
    if (node.data === data) return node
    if (data > node.data) return this.#returnNode(node.right, data)
    else return this.#returnNode(node.left, data)
  }

  #goLeft(node) {
    if (!node) return null
    if (node.left === null) return node
    return this.#goLeft(node.left)
  }

  #goRight(node) {
    if (!node) return null
    if (node.right === null) return node
    return this.#goRight(node.right)
  }

  #removeNode(node, data) {
    if (!node) return null

    if (data > node.data) {
      node.right = this.#removeNode(node.right, data)
      return node
    } else if (data < node.data) {
      node.left = this.#removeNode(node.left, data)
      return node
    } else  {
      if (!node.left && !node.right) {
        return null
      }

      if (!node.left) {
        node = node.right
        return node
      }

      if (!node.right) {
        node = node.left
        return node
      }

      let min = node.right
      while (min.left) min = min.left
      node.data = min.data
      node.right = this.#removeNode(node.right, min.data)
      return node
    }
  }

  root() {
    return this.#rootNode
  }

  add(data) {
    this.#rootNode = this.#addNewNode(this.#rootNode, data)
  }

  has(data) {
    return this.#searchNode(this.#rootNode, data)
  }

  find(data) {
    return this.#returnNode(this.#rootNode, data)
  }

  min() {
    return this.#goLeft(this.#rootNode).data
  }

  max() {
    return this.#goRight(this.#rootNode).data
  }

  remove(data) {
    this.#rootNode = this.#removeNode(this.#rootNode, data)
  }
}

module.exports = {
  BinarySearchTree
};