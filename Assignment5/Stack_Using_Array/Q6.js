// Q6. Infix to Postfix Conversion Using Stack: Write a program to convert an infix expression to a postfix expression using a stack.

function infixToPostfix(infix) {
    const stack = [];
    let postfix = '';
    const precedence = {
        '+': 1,
        '-': 1,
        '*': 2,
        '/': 2,
        '^': 3
    };

    for (let char of infix) {
        if (char.match(/[a-zA-Z0-9]/)) {
            postfix += char;
        } else if (char === '(') {
            stack.push(char);
        } else if (char === ')') {
            while (stack.length && stack[stack.length - 1] !== '(') {
                postfix += stack.pop();
            }
            stack.pop();
        } else {
            while (stack.length && precedence[char] <= precedence[stack[stack.length - 1]]) {
                postfix += stack.pop();
            }
            stack.push(char);
        }
    }

    while (stack.length) {
        postfix += stack.pop();
    }

    return postfix;
}

const infix = "a+b*(c^d-e)^(f+g*h)-i";
console.log(infixToPostfix(infix));

