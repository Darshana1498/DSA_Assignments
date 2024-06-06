// Q5. Evaluate Postfix Expression: Write a program to evaluate a postfix expression.

function evaluatePostfix(expression) {
    const stack = [];

    for (let char of expression) {
        if (!isNaN(char)) {
            stack.push(parseInt(char));
        } else {
            const b = stack.pop();
            const a = stack.pop();
            switch (char) {
                case '+':
                    stack.push(a + b);
                    break;
                case '-':
                    stack.push(a - b);
                    break;
                case '*':
                    stack.push(a * b);
                    break;
                case '/':
                    stack.push(a / b);
                    break;
            }
        }
    }

    return stack.pop();
}

console.log(evaluatePostfix("231*+9-"));