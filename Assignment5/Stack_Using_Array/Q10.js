// Q10. Postfix to Infix Conversion Using Stack: Write a program to convert a postfix expression to an infix expression using a stack.

function postfixToInfix(postfix) {
    const stack = [];

    for (let char of postfix) {
        if (char.match(/[a-zA-Z0-9]/)) {
            stack.push(char);
        } else {
            const b = stack.pop();
            const a = stack.pop();
            stack.push(`(${a}${char}${b})`);
        }
    }

    return stack.pop();
}

const postfixExpr2 = "AB+C*D-";
console.log(postfixToInfix(postfixExpr2));

