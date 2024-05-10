type QNode<T> = {
  value: T,
  next?: QNode<T>, //next may or may not exist
}
export default class Queue<T> {
  public length: number;
  private head?: QNode<T>;
  private tail?: QNode<T>;

    

  constructor() {
    this.head = this.tail = undefined;
    this.length = 0;

  }

  enqueue(item: T): void {
    const node = {value: item} as QNode<T>;
    this.length++;
    if(!this.tail){
      this.tail = this.head = node;
      return
    }
    this.tail.next = node;
    this.tail = node;
    return;
  }

  deque(): T | undefined {
    if(!this.head){
      return undefined;
    }
    this.length--;
    const head = this.head;
    this.head = this.head.next;

    //free
    head.next = undefined;

    return head.value;
  }
  
  peek(): T | undefined {
    // if head is defined return the value. return null otherwise
    return this.head?.value;
  }
}
