import LinkedListNode from "./linked-list-node";


export default class LinkedList<T> {
    head: LinkedListNode<T> = null;
    tail: LinkedListNode<T> = null;

    private _size: number = 0;

    constructor(value?: T) {
        this.addToHead(value);
    }

    static isNullOrUndefined(value: any): boolean {
        return value === null || typeof value === 'undefined';
    }

    static existValue(node: LinkedListNode<any>, value: any | any[]): boolean {
        const checkedValue = node && node.value;

        return Array.isArray(value)
            ? value.indexOf(checkedValue) !== -1
            : checkedValue === value;
    }

    get isEmpty(): boolean {
        return this._size === 0;
    }

    get size(): number {
        return this._size;
    }

    add(value: T): LinkedList<T> {
        if (this.isEmpty) {
            this.addToHead(value);
        } else {
            const node = new LinkedListNode(value);
            this.tail = this.tail.next = node;
        }
        this._size++;

        return this;
    }

    addRange(values: T[]): LinkedList<T> {
        if (values.length > 0) {
            values.forEach(item => this.add(item));
        }
        return this;
    }

    remove(value: T, isAll?: boolean): LinkedList<T> {
        while (LinkedList.existValue(this.head, value)) {
            this.head = this.head.next;
            this._size--;
            if (!isAll) {
                return this;
            }
        }

        let node = this.head;

        while (node !== null) {
            if (LinkedList.existValue(node.next, value)) {
                node.next = node.next.next;
                this._size--;
                if (!isAll) {
                    return this;
                }
            }
            node = node.next;
        }

        return this;
    }

    removeRange(values: T[] = [], isAll?: boolean): LinkedList<T> {
        while (this.head && LinkedList.existValue(this.head.next, values)) {
            this.head = this.head.next;
            this._size--;
            if (!isAll) {
                return this;
            }
        }

        let node = this.head;

        while (node !== null) {
            if (LinkedList.existValue(node.next, values)) {
                node.next = node.next.next;
                this._size--;
                if (!isAll) {
                    return this;
                }
            }
            node = node.next;
        }

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
        this._size = 0;
    }

    private addToHead(value: T) {
        if (!LinkedList.isNullOrUndefined(value)) {
            const node = new LinkedListNode(value);
            this.tail = this.head = node;
        }
    }
}
