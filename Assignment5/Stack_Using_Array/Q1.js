//Q1. Implement a stack using arrays with basic operations: push, pop, peek, and isEmpty.

class Stack {
    constructor() {
        this.items = [];
    }
    // Push element 
    push(element) {
        this.items.push(element);
    }
    // Pop element 
    pop() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items.pop();
    }
    // Peek 
    peek() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items[this.items.length - 1];
    }
    // is empty
    isEmpty() {
        return this.items.length === 0;
    }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
stack.push(50);
console.log(stack.pop()); 
console.log(stack.peek());
console.log(stack.isEmpty());
