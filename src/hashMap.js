import { LinkedList } from "./linkedList";

class HashMap {
  constructor() {
    this.capacity = 16;
    this.loadFactor = 0.75;
    this.bs = [];
    for (let i = 0; i < this.capacity; i++) {
      this.bs[i] = new LinkedList();
    }
  }

  createBuckets(num) {
    let b = [];
    for (let i = 0; i < num; i++) {
      b.push([]);
    }
    return b;
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode;
  }

  bucket(key) {
    let h = hash(key);
    return this.bs[h % this.bs.length];
  }

  entry(bucket, key) {
    for (let e of bucket) {
      if (e.key === key) {
        return e;
      }
    }
    return null;
  }

  set(key, value) {
    let index = this.hash(key) % 16;
    if (index < 0 || index >= this.capacity) {
      throw new Error("Trying to access index out of bound");
    }
    let current = this.bs[index].head;
    if (this.bs[index].contains(key)) {
      for (let i = 0; i < this.bs[index].find(key); i++) {
        current = current.next;
      }
      current.value = value;
    }
    this.bs[index].append(key, value);
  }

  get(key) {
    let index = this.hash(key) % 16;
    if (!this.bs[index].contains(key)) return null;
    let current = this.bs[index].head;
    for (let i = 0; i < this.bs[index].find(key); i++) {
      current = current.next;
    }
    return current.value;
  }

  has(key) {
    let index = this.hash(key) % this.capacity;
    return this.bs[index].contains(key);
  }

  remove(key) {
    let index = this.hash(key) % this.capacity;
    if (!this.bs[index].contains(key)) return false;
    this.bs[index].removeAt(this.bs[index].find(key));
    return true;
  }

  length() {
    const size = this.bs.reduce((sum, current) => {
      return (sum += current.size());
    }, 0);
    return size;
  }

  clear() {
    this.bs.forEach((item) => {
      if (item.size()) {
        for (let i = 0; i < item.size(); i++) {
          item.head = null;
        }
      }
    });
  }

  keys() {
    const keysArray = this.bs.reduce((res, current) => {
      let currNode = current.head;
      for (let i = 0; i < current.size(); i++) {
        res.push(currNode.key);
        currNode = currNode.next;
      }
      return res;
    }, []);
    return keysArray;
  }

  values() {
    const valuesArray = this.bs.reduce((res, current) => {
      let currNode = current.head;
      for (let i = 0; i < current.size(); i++) {
        res.push(currNode.value);
        currNode = currNode.next;
      }
      return res;
    }, []);
    return valuesArray;
  }

  entries() {
    const keysArray = this.keys();
    const valuesArray = this.values();
    const entriesArray = [];
    for (let i = 0; i < keysArray.length; i++) {
      entriesArray[i] = { key: keysArray[i], value: valuesArray[i] };
    }
    return entriesArray;
  }
}

export { HashMap };
