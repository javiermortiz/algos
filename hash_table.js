class Node {
    constructor(key, val) {
        this.key = key;
        this.val = val;
        this.next = null;
    }
}

class MyLinkedList {
    constructor() {
        this.head = null;
    }

    add(key, val) {
        const newNode = new Node(key, val);

        if (this.head === null) {
            this.head = newNode;
            return;
        }

        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }

        current.next = newNode;
    }

    get(key) {
        if (this.head === null) return null;
        if (this.head.key === key) return this.head.val;

        let current = this.head;
        while (current.next !== null) {
            current = current.next;
            if (current.key === key) return current.val;
        }

        return null;
    }
}

const myLinkedList = new MyLinkedList();
myLinkedList.add("ho", "hey");
myLinkedList.add("hello", "world");
console.log(myLinkedList);


class MyHashTable {
    constructor(n) {
        this.buckets = [];
        for (let i = 0; i < n; i++) {
            this.buckets.push(new MyLinkedList());
        }
    }

    // Get hashCode for key
    static getHashCode(key) {
        let code = 0;
        key.split("").forEach((char, idx) => {
            code += parseInt(key.charCodeAt(idx));
        });
        return code;
    }

    // Get bucket idx for hashCode
    getBucketIdx(hashCode) {
        return hashCode % this.buckets.length;
    }

    // Insert key-value into bucket
    add(key, value) {
        const hashCode = MyHashTable.getHashCode(key);
        const bucket = this.buckets[this.getBucketIdx(hashCode)];
        bucket.add(key, value);
    }

    // Get value from key
    get(key) {
        const hashCode = MyHashTable.getHashCode(key);
        const bucket = this.buckets[this.getBucketIdx(hashCode)];
        return bucket.get(key);
    }
}

const myHash = new MyHashTable(3);
myHash.add("hello", "world");
myHash.add("ho", "hey");
console.log(myHash.get("hello"));
console.log(myHash.get("ho"));
console.log(myHash.get("aardvark"));





