"use strict";
class GenericQueue {
    constructor() {
        this.items = [];
    }
    inqueue(item) {
        this.items.push(item);
    }
    dequeue() {
        return this.items.shift();
    }
    peak() {
        return this.items[0];
    }
    size() {
        return this.items.length;
    }
}
const queue = new GenericQueue();
queue.inqueue(20);
console.log(queue.peak());
queue.inqueue(30);
console.log(queue.size());
console.log(queue.dequeue());
console.log(queue.peak());
console.log(queue.size());
