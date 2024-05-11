type Node<T> = {
  value: T,
  prev?: Node<T>,
}
export default class Stack<T> {
  public length: number;
  private head?: Node<T>;
  constructor() {
    this.head = undefined;
    this.length = 0;
  }

  push(item: T): void {
    const to_add = {value: item} as Node<T>;
    this.length++;

    //base case
    if (!this.head){
      this.head = to_add; 
      return;
    }

    to_add.prev = this.head;
    this.head = to_add;
    return;
  }
  pop(): T | undefined {
    if (!this.head){
      return undefined;
    }
    const val = this.head.value;
    this.head = this.head.prev;
    this.length--;
    return val;
  }

  peek(): T | undefined {
    return this.head?.value;
  }
}
