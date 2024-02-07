class GenericQueue<T>{
    private items: T[] = [];
    inqueue(item: T): void{
        this.items.push(item);
    }
    dequeue(): T{
        return this.items.shift();
    }
    peak(): T | undefined{
        return this.items[0];
    }
    size(): number{
        return this.items.length;
    }
}
const queue = new GenericQueue<number>();

queue.inqueue(20);
console.log(queue.peak());
queue.inqueue(30);
console.log(queue.peak());
console.log(queue.dequeue());
console.log(queue.peak());
console.log(queue.size());