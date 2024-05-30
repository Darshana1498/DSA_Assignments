var twoSum = function(arr, x) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            const sum = arr[i] + arr[j];
            if (sum === x) {
                return [i, j];
            }
        }
    }
    // if no pair found then it is empty array
    return null;
};

var arr = [1,8,22,-8,10];
var x= 7;
var result = twoSum(arr, x);
console.log(result);
