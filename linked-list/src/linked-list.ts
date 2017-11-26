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

    find(value: T): LinkedListNode<T> {
        let node = this.head;

        while (node !== null) {
            if (node.value === value) {
                return node;
            }
            node = node.next;
        }

        return null;
    }

    forEach(callback: (item: T, index: number) => void) {
        let node = this.head,
            index = 0;

        while (node !== null) {
            callback(node.value, index);
            node = node.next;
            index++;
        }
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
