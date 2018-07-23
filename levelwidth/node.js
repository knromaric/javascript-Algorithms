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

module.exports = Node;