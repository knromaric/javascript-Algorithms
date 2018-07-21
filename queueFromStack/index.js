const Stack = require('./stack'); 

class Queue {
    constructor() {
        this.st_a = new Stack();
        this.st_b = new Stack();
    }

    add(record) {
        this.st_a.push(record);
    }

    remove() {
        while(this.st_a.peek()){
            this.st_b.push(this.st_a.pop());
        }

        const record = this.st_b.pop();

        while(this.st_b.peek()){
            this.st_a.push(this.st_b.pop())
        }

        return record;
    }

    peek() {
        while (this.st_a.peek()) {
            this.st_b.push(this.st_a.pop());
        }

        const record = this.st_b.peek();

        while (this.st_b.peek()) {
              this.st_a.push(this.st_b.pop())
        }

          return record;
    }
}

module.exports = Queue;