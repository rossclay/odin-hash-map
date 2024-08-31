import { LinkedList } from "./linkedList";

class HashMap {
  constructor(name) {
    this.id = Date.now().toString();
    this.name = name;
    this.buckets = [];
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode;
  }

  set(key, value) {
    // how can we deal with collisions? linked lists
    if (!this.buckets[value]) {
      this.buckets[value] = this.hash(key);
    } else if (this.buckets[value]) {
      this.buckets[value];
    }
  }

  get(key) {}

  has(key) {}

  remove(key) {}

  length() {}

  clear() {
    this.buckets = [];
  }

  keys() {}

  values() {}
}

export default HashMap;
