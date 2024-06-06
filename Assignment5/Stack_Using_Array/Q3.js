// Q3. Next Greater Element: Given an array, find the next greater element for each element in the array. The next greater element for an element x is the first greater element on the right side of x in the array.

function nextGreaterElement(arr) {
    let result = new Array(arr.length).fill(-1);
    let stack = [];

    for (let i = 0; i < arr.length; i++) {
        while (stack.length > 0 && arr[stack[stack.length - 1]] < arr[i]) {
            result[stack.pop()] = arr[i];
        }
        stack.push(i);
    }

    return result;
}

console.log(nextGreaterElement([4, 5, 2, 25])); 
