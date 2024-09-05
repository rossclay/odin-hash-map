import { Node } from "./node";
class LinkedList {
  constructor() {
    this.id = Date.now().toString();
    this.nodeList = [];
  }

  get size() {
    return this.nodeList.length;
  }

  get head() {
    return this.nodeList[0];
  }

  get tail() {
    return this.nodeList.slice(-1)[0];
  }

  at(index) {
    return this.nodeList[index];
  }

  contains(value) {
    return this.nodeList.includes(value);
  }

  find(value) {
    const index = this.nodeList.indexOf(value);
    if (index === -1) {
      return null;
    } else {
      return index;
    }
  }

  pop() {
    this.nodeList.pop();
    this.tail.nextNode = null;
  }

  append(value) {
    const newNode = new Node(value);
    const prevNode = this.head;
    newNode.nextNode = prevNode;
    this.nodeList.push(newNode);
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.nextNode = this.head;
    this.nodeList.unshift(newNode);
  }

  toString() {
    let listStr = "";
    this.nodeList.forEach((node) => {
      const nodeStr = `( ${node.value} ) -> `;
      listStr = listStr.concat(nodeStr);
    });
    listStr = listStr.concat("null");
    return listStr;
  }

  insertAt(value, index) {
    // inserts a new node with the provided value at the given index.
    const newNode = new Node(value, nodeList[index + 1]);
    const prevNode = this.at(index - 1);
    prevNode.nextNode = newNode;
  }

  removeAt(index) {
    // removes the node at the given index.
    const removedNode = this.at(index);
    const prevNode = this.at(index - 1);
    prevNode.nextNode = this.at(index + 1);
    this.nodeList.splice(removedNode);
  }
}

export { LinkedList };
