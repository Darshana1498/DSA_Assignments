// 
function reverseArray(arr){
    const reverseArray=[];
    for(let i=arr.length-1;i>=0;i--){
        reverseArray.push(arr[i]);
    }
    return arr;
}

const originalArray = [1, 2, 3, 4, 5];
console.log("Original Array:", originalArray);
const reversedArray = reverseArray(originalArray.slice());
console.log("Reversed Array:",reversedArray);
