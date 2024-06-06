//Q7. Prefix to Infix Conversion Using Stack: Write a program to convert a prefix expression to an infix expression using a stack.

function prefixToInfix(prefix) {
    const stack = [];
    prefix = prefix.split('').reverse().join('');

    for (let char of prefix) {
        if (char.match(/[a-zA-Z0-9]/)) {
            stack.push(char);
        } else {
            const a = stack.pop();
            const b = stack.pop();
            stack.push(`(${a}${char}${b})`);
        }
    }

    return stack.pop();
}

const prefix = "*+AB-CD";
console.log(prefixToInfix(prefix));
