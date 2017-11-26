import LinkedListNode from "./linked-list-node";


export default class LinkedList<T> {
    head: LinkedListNode<T> = null;
    tail: LinkedListNode<T> = null;
    size: number = 0;

    constructor(value?: T) {
        this.addToHead(value);
    }

    add(value: T): LinkedList<T> {
        if (this.isEmpty) {
            this.addToHead(value);
        } else {
            const node = new LinkedListNode(value);
            this.tail = this.tail.next = node;
        }
        this.size++;

        return this;
    }

    clear() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    get isEmpty(): boolean {
        return this.size === 0;
    }

    private addToHead(value: T) {
        if (!this.isNullOrUndefined(value)) {
            const node = new LinkedListNode(value);
            this.tail = this.head = node;
        }
    }

    private isNullOrUndefined(value: T): boolean {
        return value === null || typeof value === 'undefined';
    }
}
