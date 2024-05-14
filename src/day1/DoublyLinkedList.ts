
type Node<T> = {
  value: T,
  prev?: Node<T>,
  next?: Node<T>,
}

export default class DoublyLinkedList<T> {
  public length: number;
  private head?: Node<T>;

  constructor() {
    this.length = 0;
    this.head = undefined;
    this.tail = undefined;
  }

  //push left
  prepend(item: T): void {
    const node = {value: item} as Node<T>;
    this.length++;

    if (!this.head){
      this.head = this.tail = node;
      return;
    }

    node.next = this.head;
    this.head.prev = node;
    this.head = node;
  }

  insertAt(item: T, idx: number): void {
    if (idx > this.length){
      throw new Error("idx greater than the current length");
    } 

    if (idx === this.length){
      this.append(item);
      return
    } else if (idx === 0){
      this.prepend(item);
      return;
    }

    this.length++;
    let curr = this.head;
    for (let i = 0; i < idx; ++i){
      curr = curr.next;
    }


    curr = curr as Node<T>; //to bypass Typescript stuff;
    const node = {value: item} as Node<T>;
    node.next = curr;
    node.prev = curr.prev;
    curr.prev = node;
    curr.prev.next = node;
  }

  append(item: T): void {
    this.length++;
    const node = {value: item} as Node<T>;

    if (!this.tail){
      this.head = this.tail = node;
      return;
    }

    node.prev = this.tail;
    this.tail.next = node;
    this.tail = node;
  }

  remove(item: T): T | undefined {

  }
  get(idx: number): T | undefined {

  }
  removeAt(idx: number): T | undefined {

  }
}
