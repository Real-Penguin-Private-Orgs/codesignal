function checkPalindrome(inputString) {
    return inputString == inputString.split('').reverse().join('');
}

//RESULT: true
checkPalindrome("aabaa")