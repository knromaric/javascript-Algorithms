class Node {
    constructor(data) {
        this.data = data; 
        this.children = [];
    }

    add(record) {
        this.children.push(new Node(record));
    }

    remove(record) {
        this.children = this.children.filter(node => {
            return node.data !== record;
        });
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    traverseBF(fn) {
        let temp = [this.root];
        while(temp.length){
            const node = temp.shift();   
            temp.push(...node.children);
            fn(node);
        }
    }

    traverseDF(fn) {
        let temp = [this.root];
        while(temp.length) {
            const node = temp.shift();
            temp.unshift(...node.children);
            fn(node);
        }
    }
}

module.exports = {
    Node, 
    Tree
}