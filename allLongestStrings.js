/**
 * return another array containing all of its longest strings.
 * @param {Array} inputArray 
 * @return {Array}
 */
function allLongestStrings(inputArray) {
    let arr = inputArray;
    let longest =  0;
    let resultArr = [];

     // Iterate through array to find longest length string(s)
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].length >= longest) {
            longest = arr[i].length;
        }
    }

    // Compare each element in arr to see if it's equal to longest
    // Push the longest words into resultArr array
    for(let j = 0; j < arr.length; j++) {
        if(arr[j].length === longest) {
            resultArr.push(arr[j]);
        }
    }

    return resultArr;
}

let arr = ["aba", "aa", "ad", "vcd", "aba"]
//result: [ 'aba', 'vcd', 'aba' ]
allLongestStrings(arr);
