// Q4. Sort a Stack Using Recursion: Write a program to sort a stack using recursion.

function sortStack(stack) {
    if (stack.length === 0) {
        return;
    }

    let temp = stack.pop();
    sortStack(stack);
    sortedInsert(stack, temp);
}

function sortedInsert(stack, element) {
    if (stack.length === 0 || element > stack[stack.length - 1]) {
        stack.push(element);
        return;
    }

    let temp = stack.pop();
    sortedInsert(stack, element);
    stack.push(temp);
}

let stack = [34, 3, 31, 98, 92, 23];
sortStack(stack);
console.log(stack);


