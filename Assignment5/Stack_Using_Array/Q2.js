//Q2. Balanced Parentheses: Given an expression string, write a program to check if the parentheses are balanced.

function isBalanced(expression) {
    const stack = [];
    const pairs = {'(': ')','{': '}','[': ']'
    };

    for (let char of expression) {
        if (pairs[char]) {
            stack.push(char);
        } else {
            const top = stack.pop();
            if (pairs[top] !== char) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

console.log(isBalanced("{[()]}"));
console.log(isBalanced("{[(])}"));
