class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    size() {
        let counter = 0;
        let currentNode = this.head;

        while (currentNode) {
            counter++;
            currentNode = currentNode.next;
        }

        return counter;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        if (!this.head) {
            return null;
        }

        let currentNode = this.head;

        while (currentNode.next) {
            currentNode = currentNode.next;
        }

        return currentNode;
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        if (!this.head) {
            return;
        }

        this.head = this.head.next;
    }

    removeLast() {
        if (!this.head) {
            return;
        }

        if (!this.head.next) {
            this.head = null;
            return
        }

        let previous = this.head;
        let current = this.head.next;

        while (current.next) {
            previous = current;
            current = current.next;
        }

        previous.next = null;
    }

    insertLast(data) {
        let last = this.getLast();

        if (last) {
            last.next = new Node(data);
        } else {
            this.head = new Node(data);
        }


    }

    getAt(index) {

        if (index > this.size()) {
            return null;
        }

        let counter = 0;
        let current = this.head;

        while (current) {
            if (counter === index) {
                return current;
            }
            current = current.next
            counter++;
        }

        return null;
    }

    removeAt(index) {
        if (!this.head) {
            return;
        }

        if (index === 0) {
            this.head = this.head.next;
            return;
        }

        if (index > 0 && this.getAt(index)) {
            let previous = this.getAt(index - 1);
            previous.next = this.getAt(index).next;
        }
    }

    insertAt(data, index) {

        if (!this.head) {
            this.head = new Node(data);
            return;
        }

        if (index === 0) {
            this.head = new Node(data, this.head);
            return;
        }

        const previous = this.getAt(index - 1) || this.getLast();
        previous.next = new Node(data, previous.next);

    }

    forEach(fn) {
        let node = this.head;
        let counter = 0;
        while (node) {
            fn(node, counter);
            node = node.next;
            counter++
        }
    }

    *[Symbol.iterator]() {
        let node = this.head;
        while (node) {
            yield node;
            node = node.next;
        }
    }


}

module.exports = {
    Node,
    LinkedList
}