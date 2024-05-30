function isPalindrome(str) {

    str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let rev = "";
    for (let i = str.length - 1; i >= 0; i--){
        rev += str[i];
    }
    if (rev == str) {
        return true;
    } else {
        return false;
    }
}
let inputString = "level";
let result = isPalindrome(inputString);
console.log('Is the string "${inputString}" a palindrome?', result);
