//Q11. Infix to Prefix Conversion Using Stack: Write a program to convert an infix expression to a prefix expression using a stack.

function infixToPrefix(infix) {
    const operators = {
      "+": 1,
    "-": 1,
    "*": 2,
    "/": 2,
    "^": 3,
    };
    const stack = [];
    let prefix = "";
    for (let i = infix.length - 1; i >= 0; i--) {
      let char = infix[i];
      if (char === ")") {
        stack.push(char);
      } else if (char === "(") {
        while (stack[stack.length - 1] !== ")") {
          prefix += stack.pop();
        }
        stack.pop();
      } else if (Object.keys(operators).includes(char)) {
        while (stack.length > 0 && operators[char] <= operators[stack[stack.length - 1]]) {
          prefix += stack.pop();
        }
        stack.push(char);
      } else {
        prefix += char;
      }
    }
    while (stack.length > 0) {
      prefix += stack.pop();
    }
    return prefix.split("").reverse().join("");
  }
  const infix = "a+b*(c^d-e)^(f+g*h)-i";
  console.log(infixToPrefix(infix)); // Expected Output: "-+a*b^-^cde+f*ghi"

  



// function infixToPrefix(infix) {
//     const reverseInfix = infix.split('').reverse().join('');
//     const temp = infixToPostfix(reverseInfix.split('').map(char => {
//         if (char === '(') return ')';
//         if (char === ')') return '(';
//         return char;
//     }).join(''));

//     return temp.split('').reverse().join('');
// }

// const infixExpr2 = "(a-b/c)*(a/k-l)";
// console.log(infixToPrefix(infixExpr2));


